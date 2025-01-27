import Card from "../Card/Card.tsx";
import ResellerButton from "../ResellerButton/ResellerButton.tsx";
import LinkButton from "../LinkButton/LinkButton.tsx";
import Link from "../Link/Link.tsx";
import MusicPlayer from "../MusicPlayer/MusicPlayer.tsx";
import FakeCaptcha from "../FakeCaptcha/FakeCaptcha.tsx";
import UserFeedback from "../UserFeedback/UserFeedback.tsx";

function HomePage() {
    return (<>
        <Card title={"我们的优势"}>
            <p><strong>省心省力：</strong>Relx能帮你轻松完成各种任务，让生活更加<strong>轻松自在</strong>。</p>
            <p><strong>价格低廉：</strong>我们的价格非常低廉，相较于官网<strong>便宜了80%以上</strong>。*</p>
            <p><strong>多种功能：</strong>我们支持使用<strong>多种Relx</strong>，而您只需要支付一次费用。*</p>
            <p><strong>售后支持：</strong>我们拥有<strong>友好的售后支持</strong>，若您在使用过程中遇到问题，请及时联系售后。*
            </p>
            <div className={"flex flex-row"}>
                <LinkButton href="https://discord.lunarclient.top">Discord服务器</LinkButton>
                <LinkButton href="https://t.me/earthsworth">Telegram群组</LinkButton>
                <LinkButton href={"/join"}>加入我们</LinkButton>
            </div>
            <p>打个广告 第三方LunarClient启动器 <Link href="https://lunarclient.top">lunarclient.top</Link></p>
        </Card>

        <Card title={"不买听听歌也行"}>
            <MusicPlayer/>
            <p>仅供娱乐, 吸烟有害健康.</p>
        </Card>

        <Card title={"用户看法"}>
            <UserFeedback username={"cubewhy"} text={"买了, 孩子很喜欢吃"}/>
            <UserFeedback username={"Manthe"} text={"Get 99.9% off on VAPE purchases at getvape.today"}/>
        </Card>

        <Card title={"分销商"}>
            <div className="flex flex-row flex-wrap justify-start mt-5 space-x-2 sm:space-x-4">
                <ResellerButton link="https://t.me/cubewhy" text={"Pay with crypto (USDT...)"}/>
                <ResellerButton link="https://shop.hln.asia" text={"HLN-Boost(两天卡/周卡/月卡)"}/>
                <ResellerButton link="https://slimehack.shop" text={"Slimehack(天卡)"}/>
            </div>
            <p>除此处列出的，其它购买地址都<strong>未经授权</strong>，请谨慎甄别。</p>
            <div className={"transition ease-in-out hover:scale-110 duration-300"}>
                <FakeCaptcha textBefore="你是人类吗?"
                             textDuring="正在验证..."
                             textAfterSuccess="成功!"
                             textAfterFailure="你是人机。"
                             success={Math.floor(Math.random() * 20) + 1 === 1}
                             duration={2000}
                             dark={false}
                             link={"https://lunarclient.top"}
                />
            </div>
            <p>这个验证码是彩蛋, 多试几次可能会成功.</p>
        </Card>

        <Card footnote={true}>
            <p>* 吸烟有害健康,本页面展示的是虚拟产品VAPE, 是我的世界的类固醇, 并不是含<Link
                href={"https://zh.wikipedia.org/zh-cn/%E5%B0%BC%E5%8F%A4%E4%B8%81"}>尼古丁</Link>的产品.</p>
            <p>* CNY/USD汇率作7.165计算，官网售价为9.99USD/月，租号玩官方定价为15CNY/月，最终结果约为80%。</p>
            <p>* 租号玩支持使用v4/lite, v3/v2等暂不支持。</p>
            <p>* 退款政策由分销商制定, 开发者无法处理退款请求。</p>
            <p>* 我们没有任何QQ联系方式, 分销商群组并不是官方群组。</p>
            <p>* 由于账号成本，租号玩官方服务需要收费；核心源代码在GitHub开源（<a
                href="https://github.com/CubeWhyMC/DingZhenServlet">点击这里</a>），若您不想使用官方服务，请自行搭建。</p>
            <p>Made by <Link href="https://github.com/CubeWhyMC">CubeWhy</Link> & HXY group members | Page designed
                by &nbsp;
                <Link href="https://space.bilibili.com/1674232182">天沐TNT</Link></p>
        </Card>
    </>);
}

export default HomePage;