import { Result, Button } from 'antd'
import { useHistory } from 'react-router'

const Success = ({selected}) => {
    let history = useHistory()

    const goHome = () => {
        history.push('/home')
        selected('/home')
    }

    return (
        <Result
            status="success"
            title="报名成功"
            extra={[
                <Button type="primary" key="console" onClick={goHome}>
                    返回主页
                </Button>,
            ]}
        />
    )
}

export default Success