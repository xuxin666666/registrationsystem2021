import { Typography, Image, Card } from 'antd'
import { useHistory } from 'react-router-dom'

import '../../asset/css/home.css'
import room from '../../asset/image/room.jpg'
import server from '../../asset/image/server.jpg'
import books from '../../asset/image/books.jpg'
import refrigerator from '../../asset/image/refrigerator.jpg'

const { Title, Paragraph, Text, Link } = Typography;

const Home = ({ selected }) => {
    let history = useHistory()

    let toRegister = () => {
        history.push('/register')
        selected('/register')
    }


    return (
        <Typography id='home_typography'>
            <Image.PreviewGroup>
                <Title style={{ marginTop: '20px' }}>晴空工作室简介</Title>
                <Paragraph>
                    晴空工作室成立于2009年，为电子科技大学数学科学学院的一个创新团队。团队由本科生组成，主要从事于web网页的开发与维护，团队内也有一些成员有游戏开发经验。经过前辈们的积累，我们团队已取得一些成果，开发出了许多有价值的产品，每一届创新创业大赛，我们工作室都有人参与其中并取得成果。期待你的<Text strong onClick={toRegister}><Link>报名</Link></Text>加入，使我们工作室更创辉煌！
                </Paragraph>
                <Card className='home_image_right'>
                    <Image src={room} ></Image>
                    <text>我们的工作室</text>
                </Card>
                <Title level={2}>我们工作室的历史</Title>
                <Paragraph>
                    晴空工作室创于2009年，由杨鹏老师带队。先是定位于基础实验大楼，后又搬迁到创新创业中心，自此定居到现在。工作室现在的周边环境也不错，虽然离宿舍区有点远，但骑着自行车也要不了几分钟。工作室有空调，小冰箱，大~屏的iMac，还有各种书籍和好玩的桌游。当然，我们工作室也少不了英雄人物了，14届的姜神前辈的事迹现在都偶尔谈起。<br />
                    关于我们工作室的就业学生去向，大部分都是去了互联网企业，还有一些🐮🍺的大佬保研读研去了。
                </Paragraph>
                <Card className='home_image_left'>
                    <Image src={refrigerator} ></Image>
                    <text>小冰箱和饮水机</text>
                </Card>
                <Card className='home_image_right'>
                    <Image src={books} ></Image>
                    <text>各种各样的书籍</text>
                </Card>
                <Title level={2}>我们的开发团队</Title>
                <Title style={{ textAlign: 'center' }} level={3}>前端组</Title>
                <Paragraph>
                    负责PC端与移动端的网页设计与开发。掌握html、css、js以及一些前端框架与样式库的使用。
                </Paragraph>
                <Title style={{ textAlign: 'center' }} level={3}>后端组</Title>
                <Paragraph>
                    负责编写后端的逻辑与接口，与数据库对接并将前端所编写好的页面部署在服务器上。掌握有go、mysql、gorm等语言或工具。
                </Paragraph>
                <Title style={{ textAlign: 'center' }} level={3}>游戏组</Title>
                <Paragraph>
                    html、css、js不仅能用来写网页，也能编写游戏哦。我们已经写过好多个小游戏啦。当然，团队内也有人对Unity这种专门写游戏的工具初窥门径。
                </Paragraph>
                <Title level={2}>加入我们吧</Title>
                <Paragraph>
                    如果你对计算机编程和UI设计很有兴趣<br />
                    如果你有严密的数学思维<br />
                    如果你有较强的自学能力<br />
                    如果你希望在大学学习中获得额外的收获<br />
                    如果你想做出一个独属于自己的优秀成果<br />
                    还在等什么，快来<Text strong onClick={toRegister}><Link>报名</Link></Text>加入我们吧，大家一起讨论、交流、玩耍，共同学习，共同进步，共同提升自我。
                </Paragraph>
            </Image.PreviewGroup>
        </Typography>
    )
}

export default Home