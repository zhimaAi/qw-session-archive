<?php
// Copyright © 2016- 2024 Sesame Network Technology all right reserved

namespace App\Controller;

use App\Libraries\Core\Http\BaseController;
use App\Models\CorpModel;
use App\Services\ChatSessionService;
use Psr\Http\Message\ResponseInterface;
use Psr\Http\Message\ServerRequestInterface;
use Throwable;
use Yiisoft\Auth\Middleware\Authentication;

class ChatController extends BaseController
{
    /**
     * 按员工查询与客户的会话列表
     */
    public function getCustomerConversationListByStaff(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $staffUserid = $params['staff_userid'] ?? '';

        $result = ChatSessionService::getCustomerConversationListByStaff($page, $size, $currentCorp, $staffUserid, $params);

        return $this->jsonResponse($result);
    }

    /**
     * 按员工查询与员工的会话列表
     */
    public function getStaffConversationListByStaff(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $staffUserid = $params['staff_userid'] ?? '';

        $result = ChatSessionService::getStaffConversationListByStaff($page, $size, $currentCorp, $staffUserid, $params);

        return $this->jsonResponse($result);
    }

    /**
     * 按员工查询与群的会话列表
     */
    public function getRoomConversationListByStaff(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $staffUserid = $params['staff_userid'] ?? '';

        $result = ChatSessionService::getRoomConversationListByStaff($page, $size, $currentCorp, $staffUserid, $params);

        return $this->jsonResponse($result);
    }

    /**
     * 按客户查询与员工的会话列表
     */
    public function getStaffConversationListByCustomer(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $externalUserid = $params['external_userid'] ?? '';

        $result = ChatSessionService::getStaffConversationListByCustomer($page, $size, $currentCorp, $externalUserid, $params);

        return $this->jsonResponse($result);
    }

    /**
     * 根据会话获取聊天内容
     */
    public function getMessageListByConversation(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $conversationId = ($params['conversation_id'] ?? '');

        $result = ChatSessionService::getMessageListByConversation($page, $size, $currentCorp, $conversationId);

        return $this->jsonResponse($result);
    }

    /**
     * 根据群聊获取聊天内容
     */
    public function getMessageListByGroup(ServerRequestInterface $request): ResponseInterface
    {
        $currentCorp = $request->getAttribute(CorpModel::class);

        $params = $request->getQueryParams();
        $page = max($params['page'] ?? 1, 1);
        $size = max($params['size'] ?? 10, 1);
        $groupChatId = ($params['group_chat_id'] ?? '');

        $result = ChatSessionService::getMessageListByGroup($page, $size, $currentCorp, $groupChatId);

        return $this->jsonResponse($result);
    }


    /**
     * @param ServerRequestInterface $request
     * Notes: 会话搜索
     * User: rand
     * Date: 2024/11/11 12:03
     * @return ResponseInterface
     * @throws Throwable
     */
    public function getSearch(ServerRequestInterface $request):ResponseInterface
    {
        $currentUserInfo = $request->getAttribute(Authentication::class);

        $res = ChatSessionService::getSearch($currentUserInfo, $request->getQueryParams());

        return $this->jsonResponse($res);
    }
}
