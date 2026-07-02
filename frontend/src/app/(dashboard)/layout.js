"use client";
import { Layout, Menu } from "antd";
import { usePathname, useRouter } from "next/navigation";

const items = [
  { key: "/", label: "Home" },
  { key: "/tasks", label: "Tasks" },
];

export default function DashboardLayout({ children }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Layout.Sider>
        <h2 style={{ color: "white", padding: "16px" }}>To-Do App</h2>
        <Menu
          theme="dark"
          selectedKeys={[pathname]}
          items={items}
          onClick={({ key }) => router.push(key)}
        />
      </Layout.Sider>
      <Layout>
        <Layout.Content style={{ padding: "24px" }}>
          {children}
        </Layout.Content>
      </Layout>
    </Layout>
  );
}