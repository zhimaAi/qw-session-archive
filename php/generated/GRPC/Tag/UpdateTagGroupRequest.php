<?php
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: modules/main/proto/customer.proto

namespace GRPC\Tag;

use Google\Protobuf\Internal\GPBType;
use Google\Protobuf\Internal\RepeatedField;
use Google\Protobuf\Internal\GPBUtil;

/**
 * Generated from protobuf message <code>customer.UpdateTagGroupRequest</code>
 */
class UpdateTagGroupRequest extends \Google\Protobuf\Internal\Message
{
    /**
     * 企业id
     *
     * Generated from protobuf field <code>string corp_id = 1;</code>
     */
    protected $corp_id = '';
    /**
     * 标签组id
     *
     * Generated from protobuf field <code>string tag_group_id = 2;</code>
     */
    protected $tag_group_id = '';
    /**
     * 标签组名
     *
     * Generated from protobuf field <code>string tag_group_name = 3;</code>
     */
    protected $tag_group_name = '';
    /**
     *顺序
     *
     * Generated from protobuf field <code>uint32 order = 4;</code>
     */
    protected $order = 0;
    /**
     * 多个标签列表
     *
     * Generated from protobuf field <code>repeated .customer.TagRequest tags = 5;</code>
     */
    private $tags;

    /**
     * Constructor.
     *
     * @param array $data {
     *     Optional. Data for populating the Message object.
     *
     *     @type string $corp_id
     *           企业id
     *     @type string $tag_group_id
     *           标签组id
     *     @type string $tag_group_name
     *           标签组名
     *     @type int $order
     *          顺序
     *     @type array<\GRPC\Tag\TagRequest>|\Google\Protobuf\Internal\RepeatedField $tags
     *           多个标签列表
     * }
     */
    public function __construct($data = NULL) {
        \GRPC\GPBMetadata\Customer::initOnce();
        parent::__construct($data);
    }

    /**
     * 企业id
     *
     * Generated from protobuf field <code>string corp_id = 1;</code>
     * @return string
     */
    public function getCorpId()
    {
        return $this->corp_id;
    }

    /**
     * 企业id
     *
     * Generated from protobuf field <code>string corp_id = 1;</code>
     * @param string $var
     * @return $this
     */
    public function setCorpId($var)
    {
        GPBUtil::checkString($var, True);
        $this->corp_id = $var;

        return $this;
    }

    /**
     * 标签组id
     *
     * Generated from protobuf field <code>string tag_group_id = 2;</code>
     * @return string
     */
    public function getTagGroupId()
    {
        return $this->tag_group_id;
    }

    /**
     * 标签组id
     *
     * Generated from protobuf field <code>string tag_group_id = 2;</code>
     * @param string $var
     * @return $this
     */
    public function setTagGroupId($var)
    {
        GPBUtil::checkString($var, True);
        $this->tag_group_id = $var;

        return $this;
    }

    /**
     * 标签组名
     *
     * Generated from protobuf field <code>string tag_group_name = 3;</code>
     * @return string
     */
    public function getTagGroupName()
    {
        return $this->tag_group_name;
    }

    /**
     * 标签组名
     *
     * Generated from protobuf field <code>string tag_group_name = 3;</code>
     * @param string $var
     * @return $this
     */
    public function setTagGroupName($var)
    {
        GPBUtil::checkString($var, True);
        $this->tag_group_name = $var;

        return $this;
    }

    /**
     *顺序
     *
     * Generated from protobuf field <code>uint32 order = 4;</code>
     * @return int
     */
    public function getOrder()
    {
        return $this->order;
    }

    /**
     *顺序
     *
     * Generated from protobuf field <code>uint32 order = 4;</code>
     * @param int $var
     * @return $this
     */
    public function setOrder($var)
    {
        GPBUtil::checkUint32($var);
        $this->order = $var;

        return $this;
    }

    /**
     * 多个标签列表
     *
     * Generated from protobuf field <code>repeated .customer.TagRequest tags = 5;</code>
     * @return \Google\Protobuf\Internal\RepeatedField
     */
    public function getTags()
    {
        return $this->tags;
    }

    /**
     * 多个标签列表
     *
     * Generated from protobuf field <code>repeated .customer.TagRequest tags = 5;</code>
     * @param array<\GRPC\Tag\TagRequest>|\Google\Protobuf\Internal\RepeatedField $var
     * @return $this
     */
    public function setTags($var)
    {
        $arr = GPBUtil::checkRepeatedField($var, \Google\Protobuf\Internal\GPBType::MESSAGE, \GRPC\Tag\TagRequest::class);
        $this->tags = $arr;

        return $this;
    }

}

