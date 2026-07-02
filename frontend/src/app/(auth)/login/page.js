"use client";
import { Form, Input, Button, Card } from "antd";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

const onFinish = async (values) => {
  try {
    const res = await fetch("http://localhost:4000/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    const data = await res.json();

    if (res.ok) {
      // lưu token
      localStorage.setItem("token", data.token);
      router.push("/");
    } else {
      console.log(data.message);
    }
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <Card title="Login" style={{ width: 400 }}>
        <Form onFinish={onFinish} layout="vertical">
          <Form.Item label="Username" name="username" rules={[{ required: true }]}>
            <Input />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input.Password />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              Login
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}