package httpbatch

import (
	"context"
	"go.uber.org/zap"
)

const pluginName = "httpbatch"

type Logger interface {
	NamedLogger(name string) *zap.Logger
}

type Plugin struct {
	log *zap.Logger
}

func (p *Plugin) Init(log Logger) error {
	p.log = log.NamedLogger(pluginName)
	p.log.Info(`httpbatch插件初始化成功`)
	return nil
}

func (p *Plugin) Serve() chan error {
	p.log.Info(`httpbatch插件开始服务`)
	return nil
}

func (p *Plugin) Stop(ctx context.Context) error {
	p.log.Info(`httpbatch插件停止服务`)
	return nil
}

func (p *Plugin) Name() string {
	return pluginName
}

func (p *Plugin) RPC() any {
	return &rpc{
		log: p.log,
		pl:  p,
	}
}