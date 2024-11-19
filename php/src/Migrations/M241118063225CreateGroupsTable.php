<?php

declare(strict_types=1);

namespace App\Migrations;

use Yiisoft\Db\Migration\MigrationBuilder;
use Yiisoft\Db\Migration\RevertibleMigrationInterface;

/**
 * Class M241118063225CreateGroupsTable
 */
final class M241118063225CreateGroupsTable implements RevertibleMigrationInterface
{
    public function up(MigrationBuilder $b): void
    {
        $sql = /** @lang sql */ <<<SQL
create table groups
(
    id serial primary key,
    created_at timestamp not null default now(),
    updated_at timestamp not null default now(),

    corp_id varchar(32) not null default '[]',
    chat_id varchar(255) not null default '',
    name varchar(255) not null default '',
    owner varchar(255) not null default '',
    member_version varchar(255) not null default '',
    group_status int2 not null default 0,
    group_create_time timestamp not null default now(),
    staff_num int2 not null default 0,
    cst_num int2 not null default 0,
    total_member int2 not null default 0,
    member_list jsonb not null default '[]',
    admin_list jsonb not null default '[]',
    has_conversation boolean not null default false
);

create index on groups using btree ("corp_id");
create index on groups using btree ("owner");
create index on groups using btree ("name");
create index on groups using gin ("member_list");

comment on table groups is '群聊';

comment on column groups.corp_id is '所属企业id';
comment on column groups.chat_id is '群聊id';
comment on column groups.name is '群聊名称';
comment on column groups.member_version is '当前群成员版本号';
comment on column groups.group_status is '状态';
comment on column groups.group_create_time is '群聊创建时间';
comment on column groups.staff_num is '员工数';
comment on column groups.cst_num is '客户数';
comment on column groups.total_member is '总人数';
comment on column groups.member_list is '群成员列表';
comment on column groups.admin_list is '群管理员列表';
comment on column staff.has_conversation is '是否有过会话记录';
SQL;

        migrate_exec($b, $sql);
    }

    public function down(MigrationBuilder $b): void
    {
        $sql = /** @lang sql */ "drop table groups;";

        migrate_exec($b, $sql);
    }
}