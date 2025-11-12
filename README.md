# 联系人管理后端 API (Contacts Backend API)

这是一个使用 Node.js、Express.js 和 Prisma 构建的 RESTful API 服务，用于管理联系人数据和用户认证。

## 技术栈

-   **运行时:** Node.js
-   **Web 框架:** Express.js
-   **ORM:** Prisma
-   **数据库:** SQLite (开发环境，可切换为 PostgreSQL/MySQL)
-   **语言:** TypeScript
-   **包管理器:** pnpm

## 安装与运行

### 1. 克隆仓库

```bash
git clone https://github.com/YLee007/832302124_contacts_backend.git
cd contacts-backend
```

### 2. 安装依赖

确保你已经安装了 pnpm。

```bash
pnpm install
```

### 3. 配置环境变量

创建 `.env` 文件，并根据 `.env.example` 填写配置信息。

```bash
cp .env.example .env
```

编辑 `.env` 文件：
-   `DATABASE_URL`: 数据库连接字符串 (开发环境默认为 `file:./prisma/dev.db`)
-   `PORT`: API 监听端口 (默认为 3000)
-   `JWT_SECRET`: 用于 JWT 签名的秘密密钥

### 4. 数据库初始化与迁移

生成 Prisma Client 并应用数据库迁移。

```bash
npx prisma generate
npx prisma migrate dev --name init_database # 可以用任何名称，例如 init_database
```

如果数据库文件 `prisma/dev.db` 不存在，Prisma 会自动创建。

### 5. 启动开发服务器

```bash
pnpm dev
```

API 服务将在 `http://localhost:3000` 启动。

## API 端点概览 (示例)

-   `GET /api/contacts`: 获取联系人列表 (支持搜索、筛选、排序、分页)
-   `POST /api/contacts`: 创建新联系人
-   `GET /api/contacts/:id`: 获取单个联系人详情
-   `PUT /api/contacts/:id`: 更新联系人信息
-   `DELETE /api/contacts/:id`: 删除联系人
-   `PATCH /api/contacts/:id/favorite`: 切换联系人收藏状态
-   `POST /api/auth/register`: 用户注册
-   `POST /api/auth/login`: 用户登录

## 注意

确保前端服务已启动，以便与此 API 进行交互。