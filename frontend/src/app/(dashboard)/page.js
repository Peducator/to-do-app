import { Space, Button } from "antd";
import Link from "next/link";

export default function HomePage() {
  return (
    <Space orientation="vertical" align="center" style={{ width: "100%", marginTop: "100px" }}>
      <h1>Welcome to To-Do App</h1>
      <Space>
        <Link href="/login">
          <Button type="primary">Login</Button>
        </Link>
        <Link href="/register">
          <Button>Register</Button>
        </Link>
      </Space>
    </Space>
  );
}