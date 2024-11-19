<?php

declare(strict_types=1);

namespace App\Migrations;

use Yiisoft\Db\Migration\MigrationBuilder;
use Yiisoft\Db\Migration\RevertibleMigrationInterface;

/**
 * Class M241118033337CreateUsersTable
 */
final class M241118033337CreateUsersTable implements RevertibleMigrationInterface
{
    public function up(MigrationBuilder $b): void
    {
        $sql = /** @lang sql */ <<<EOF
create table users
(
    id serial primary key,
    corp_id varchar(64) not null default '',
    userid varchar(64) not null default '',
    account varchar(64) not null default '',
    password varchar(128) not null default '',
    created_at timestamp not null default now(),
    updated_at timestamp not null default now()
);

create index on users ("corp_id", "userid");
create index on users ("account");

comment on table users is '用户表';
comment on column users.corp_id is '企业id';
comment on column users.userid is '企微的userid，在当前企业范围是唯一的';
comment on column users.account is '登录账号';
comment on column users.password is '登录密码';
EOF;

        migrate_exec($b, $sql);

    }

    public function down(MigrationBuilder $b): void
    {
        $sql = /** @lang sql */ "drop table users";

        migrate_exec($b, $sql);
    }
}