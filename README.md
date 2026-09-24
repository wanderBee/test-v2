# GitHub Demo · test-v2

这是一个用于演示 GitHub 基础协作流程的最小 Demo 仓库。

## 这个 Demo 展示什么

- Repository：代码仓库
- Commit：提交一次代码变更
- Branch：在独立分支开发
- Pull Request：发起代码评审
- GitHub Actions：自动执行检查

## 本地运行

```bash
git clone https://github.com/wanderBee/test-v2.git
cd test-v2
python -m http.server 8080
```

浏览器访问：

```text
http://localhost:8080
```

## 推荐演示流程

1. 从 `main` 创建分支，例如 `feature/change-title`
2. 修改 `index.html`
3. Commit 并 Push
4. 创建 Pull Request
5. 等待 GitHub Actions 检查通过
6. Review 后 Merge 到 `main`

## 目录

```text
.
├── .github/workflows/check.yml
├── index.html
├── app.js
├── style.css
└── README.md
```

> 这个仓库刻意保持简单，重点不是业务逻辑，而是把 GitHub 的核心开发流程跑一遍。
