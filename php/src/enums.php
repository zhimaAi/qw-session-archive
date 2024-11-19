<?php
// Copyright © 2016- 2024 Sesame Network Technology all right reserved

/**
 * 所有的枚举类型在这里定义
 */

namespace App;

enum ChatMessageRole: int
{
    case Customer = 1; //客户
    case Staff = 2;    //员工
    case Group = 3;    //群
}

/**
 * 聊天类别
 */
enum ChatConversationType: int
{
    case Single = 1;    //单聊
    case Group = 2;     //群聊
    case Internal = 3;  //员工内部聊天
}
