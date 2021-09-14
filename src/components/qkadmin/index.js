import { useEffect, useState } from 'react';
import { Button, Card, message, Table } from 'antd';
import axios from 'axios';

const Qkadmin = ({selected}) => {

    const  [data, setData] = useState()
    
    let sendEmail = (email) => {

    }

    let columns = [
        {title: "" ,dataIndex: 'key'},
        {title: '名字', dataIndex: 'name'},
        {title: '性别', dataIndex: 'gender', render(h) {
            switch (h) {
                case 0:
                    return (<div>男</div>)
                case 1:
                    return (<div>女</div>)
                default:
                    return (<div>保密</div>)
            }
        },},
        {title: '电话号码', dataIndex: 'phone'},
        {title: 'QQ', dataIndex: 'qq'},
        {title: '个人介绍', dataIndex: 'self_introduction'},
        {title: '掌握技能', dataIndex: 'specialty'},
        {title: '', dataIndex: 'email', render(h) {
            return (
                <Button onClick={sendEmail(h)}>发送邮件</Button>
            )
        },}
    ]

    // let data = [
    //     {key: '1', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
    //     {key: '2', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
    //     {key: '3', name: '123', sex: 'male', phone: '13344445555', qq: '1234567890', introduction: '爱的还激动i阿娇的维护覅清道夫七点七五家啊大家我i多久哦i啊才能卡农期间骄傲的五点七九擦的家啊大家啊快乐到家啊我欸请问Dowd就看见撒插卡式大家就都i完全', masterSkill: '奥迪oh我i都i就能看见难道我奥i是的纱线参数参数江南文化的武器和啊十大奢侈对你我都好'},
    // ]

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        message.loading({
            content: '请求数据中',
            duration: 0,
            key: 'ml'
        })
        const res = await axios.get('/admin/all')
        message.destroy('ml')
        if(res.status !== 200){
            return message.error('请求数据失败', 5)
        }
        // console.log(res)
        var pData = res.data.data
        for(let i = 0; i < pData.length; i++){
            let item = pData[i]
            let email = item.qq + '@qq.com'
            item['email'] = email
            item['key'] = i
        }
        // pData.map((item) => {
        //     let email = item.qq + '@qq.com'
        //     item['email'] = email
        //     item['key'] = item.id
        //     return item
        // })
        setData(pData)
        // data.map((item) => {
        //     let email = item.qq + '@qq.com'
        //     item['email'] = email
        //     return item
        // })
    }


    return (
        <Card style={{marginTop: '10px'}}>
            <Table columns={columns} dataSource={data} />
        </Card>
    )
}

export default Qkadmin