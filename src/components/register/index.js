import axios from 'axios'
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import {
    Form,
    Input,
    Button,
    Radio,
    Card,
    Col,
    Row,
    message
} from 'antd'

import '../../asset/css/register.less'

const Item = Form.Item

const Register = ({selected}) => {
    let history = useHistory()

    let [loading, setLoading] = useState(false)

    const vlidateComfirmMobile = (_, value) => {
        const reg =
            /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
        if (!value || reg.test(value))
            return Promise.resolve()
        return Promise.reject(new Error("手机号格式有误"));

    };

    const onFinish = async (values) => {
        setLoading(true)
        const data = axios.put('', values)
        if(1){
            message.error('提交表单失败', 2)
        }
        setLoading(false)
        history.replace('/success')
    }

    useEffect(() => {
        selected('register')
    })

    return (
        <Row>
            <Col xs={{ span: 20, offset: 2 }} lg={{ span: 12, offset: 6 }}>
                <Card id='register_card'>
                    <Form
                        labelCol={{
                            xs: { span: 6 },
                            lg: { span: 5 }
                        }}
                        wrapperCol={{
                            xs: { span: 16 },
                            lg: { span: 18 }
                        }}
                        scrollToFirstError
                        onFinish={onFinish}
                    >
                        <Item
                            name='username'
                            label='姓名'
                            rules={[
                                { required: true, message: '姓名不能为空' }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input placeholder='请输入你的姓名' />
                        </Item>
                        <Item
                            name='sex'
                            label='性别'
                            initialValue='secret'
                        >
                            <Radio.Group>
                                <Radio value='male'>男</Radio>
                                <Radio value='female'>女</Radio>
                                <Radio value='secret'>保密</Radio>
                            </Radio.Group>
                        </Item>
                        <Item
                            name='phone'
                            label='电话号码'
                            rules={[
                                { required: true, message: '电话号码不能为空' },
                                { validator: vlidateComfirmMobile }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input type='tel' placeholder='请输入你的电话号码' />
                        </Item>
                        <Item
                            name='QQ'
                            label='QQ'
                            rules={[
                                { required: true, message: 'QQ不能为空' }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input placeholder='请输入你的QQ' />
                        </Item>
                        <Item
                            name='introduction'
                            label='个人介绍'
                            rules={[
                                { required: true, message: '个人介绍不能为空' }
                            ]}
                            validateTrigger='onBlur'
                        >
                            <Input.TextArea
                                rows={3}
                                placeholder='此处填写个人介绍，如特长、兴趣爱好等'
                            />
                        </Item>
                        <Item
                            name='masterSkill'
                            label='掌握技能'
                            initialValue=''
                        >
                            <Input.TextArea
                                rows={3}
                                placeholder='此处填写所掌握的技能，如思维能力、编程等，可不填'
                            />
                        </Item>
                        <Item wrapperCol={{ span: 8, offset: 8 }}>
                            <Button type='primary' htmlType='submit' loading={loading}>提交</Button>
                        </Item>
                    </Form>
                </Card>
            </Col>
        </Row>
    )
}

export default Register