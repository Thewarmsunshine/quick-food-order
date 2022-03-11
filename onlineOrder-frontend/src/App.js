import { Layout, Typography } from "antd";
import { useState } from "react";
import FoodList from "./components/FoodList";
import LoginForm from "./components/LoginForm";
import MyCart from "./components/MyCart";
import SignupForm from "./components/SignupForm";
import ImageOne from "./main_page.jpg"

const { Header, Content } = Layout;
const { Title } = Typography;

function App() {
    const [authed, setAuthed] = useState(false);

    return (
        <Layout style={{ height: "100vh" }}>
            <Header style ={{
                background: "#f47920"
            }}>
                <div className="header"  style={{
                    display: "flex",
                    justifyContent: "space-between"
                }}>
                    <Title
                        level={2}
                        style={{ color: "white", lineHeight: "inherit", marginBottom: 0 }}
                    >
                        Quick
                    </Title>
                    <div>{authed ? <MyCart /> : <SignupForm />}</div>
                </div>
            </Header>
            <Content
                style={{
                    padding: "50px",
                    maxHeight: "calc(100% - 64px)",
                    overflowY: "auto",
                }}
            >
                {/*mission is bound to be accomplished.*/}

                {authed ? (

                    <FoodList />
                ) : (
                    <>
                        <img src={ImageOne} alt="" style={{
                            padding: "10px",
                            width: "50%",
                            display: "inline-block"
                        }}>
                        </img>
                        <div style={{
                            display: "inline-block",
                            padding: "100px"
                        }}>
                            <LoginForm onSuccess={() => setAuthed(true)}/>
                        </div>
                    </>

                )}
            </Content>
        </Layout>
    );
}

export default App;