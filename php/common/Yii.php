<?php
// Copyright © 2016- 2024 Sesame Network Technology all right reserved

/**
 * 类库统一访问入口
 */

namespace Common;

use EasyWeChat\Kernel\Exceptions\InvalidArgumentException;
use EasyWeChat\Work\Application;
use Exception;
use Predis\ClientInterface;
use Psr\Container\ContainerInterface;
use Psr\Log\LoggerInterface;
use Spiral\Goridge\Relay;
use Spiral\Goridge\RPC\RPC;
use Throwable;
use Yiisoft\Aliases\Aliases;
use Yiisoft\Cache\CacheInterface;
use Yiisoft\Config\ConfigInterface;
use Yiisoft\Db\Connection\ConnectionInterface;
use Yiisoft\Mutex\Redis\RedisMutexFactory;
use Yiisoft\Mutex\SimpleMutex;

final class Yii
{
    private static ?ConfigInterface $config;
    private static ?ContainerInterface $container = null;

    public static function setConfig(ConfigInterface $config): void
    {
        self::$config = $config;
    }

    public static function getConfig(): ConfigInterface
    {
        if (self::$config === null) {
            throw new \RuntimeException('Config is not initialized');
        }

        return self::$config;
    }

    public static function setContainer(ContainerInterface $container): void
    {
        self::$container = $container;
    }

    public static function getContainer(): ContainerInterface
    {
        if (self::$container === null) {
            throw new \RuntimeException('Container is not initialized');
        }

        return self::$container;
    }

    public static function params()
    {
        return self::getConfig()->get('params');
    }

    public static function isDebug()
    {
        return $_ENV['YII_DEBUG'];
    }

    public static function aliases(): Aliases
    {
        return self::getContainer()->get(Aliases::class);
    }

    public static function db()
    {
        return self::getContainer()->get(ConnectionInterface::class);
    }

    public static function cache(): CacheInterface
    {
        return self::getContainer()->get(CacheInterface::class);
    }

    public static function logger(string $business = ''): LoggerInterface
    {
        return self::getContainer()->get('custom.logger')($business);
    }

    public static function redis()
    {
        return self::getContainer()->get(ClientInterface::class);
    }

    public static function mutex($ttl = 30): SimpleMutex
    {
        static $mutexes = [];

        if (!isset($mutexes[$ttl])) {
            $predis = self::getContainer()->get(ClientInterface::class);
            $mutexFactory = new RedisMutexFactory($predis, $ttl);
            $mutexes[$ttl] = new SimpleMutex($mutexFactory);
        }

        return $mutexes[$ttl];
    }

    /**
     * 获取默认rpc客户端实例（中心RPC）
     */
    public static function getDefaultRpcClient() : RPC
    {
        static $relay;
        if (empty($relay)) {
            $relay = Relay::create('tcp://127.0.0.1:6001');
        }

        return new RPC($relay);
    }

    /**
     * 获取当前环境的rpc客户端实例
     * @throws Throwable
     */
    public static function getRpcClient() : RPC
    {
        static $relays = [];

        $info = self::getDefaultRpcClient()->call('module.Info', Module::getCurrentModuleName());
        if (empty($info['rpc_port'])) {
            throw new Exception("没有找到模块" . Module::getCurrentModuleName() . "的rpc地址");
        }

        $address = "tcp://127.0.0.1:{$info['rpc_port']}";
        if (!isset($relays[$address])) {
            $relays[$address] = Relay::create($address);
        }

        return new RPC($relays[$address]);
    }

    /**
     * 获取EasyWechat对象实例
     * @throws InvalidArgumentException
     */
    public static function getEasyWechatClient(string $corpId, string $secret)
    {
        $config = [
            'corp_id' => $corpId,
            'secret' => $secret,
        ];
        $app = new Application($config);
        $app->setCache(Yii::cache()->psr());
        $app->getAccessToken();

        return $app;
    }
}