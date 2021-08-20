import { useEffect } from 'react';
import { Button, Card, Table } from 'antd';
import { useHistory } from 'react-router-dom'

const Qkadmin = ({selected}) => {
    let history = useHistory()

    let backhome = () => {
        history.push('/home')
        selected('/home')
    }

    let sendEmail = (email) => {

    }

    let columns = [
        {title: '名字', dataIndex: 'name', key: 'name'},
        {title: '性别', dataIndex: 'sex', key: 'sex'},
        {title: '电话号码', dataIndex: 'phone', key: 'phone'},
        {title: 'QQ', dataIndex: 'qq', key: 'qq'},
        {title: '个人介绍', dataIndex: 'introduction', key: 'introduction'},
        {title: '掌握技能', dataIndex: 'masterSkill', key: 'masterSkill'},
        {title: '', dataIndex: 'email', render(h) {
            return (
                <Button onClick={sendEmail(h)}>发送邮件</Button>
            )
        },}
    ]

    let data = [
        {key: '1', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
        {key: '2', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
        {key: '3', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
    ]

    useEffect(() => {
        data.map((item) => {
            let email = item.qq + '@qq.com'
            item['email'] = email
            return item
        })
    }, [])


    return (
        <Card style={{marginTop: '10px'}}>
            <Table columns={columns} dataSource={data} />
        </Card>
    )
}

export default Qkadmin