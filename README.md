# 🚀 DevOps Assessment - Next.js Containerization & Kubernetes Deployment



---

## 📋 Objective

This project demonstrates the complete DevOps workflow for a **Next.js** application:

- ✅ Containerization with **Docker**
- ✅ Automated image build & push using **GitHub Actions**
- ✅ Deployment on **Kubernetes (Minikube)**
- ✅ CI/CD best practices with **GitHub Container Registry (GHCR)**

---

## 🏗️ Project Structure


```
nextjs-starter/
├── .github/
│ └── workflows/
│ └── main.yml # GitHub Actions workflow for CI/CD
├── starter/
│ ├── deployment.yaml # Kubernetes Deployment manifest
│ └── service.yaml # Kubernetes Service manifest
├── Dockerfile # Docker build configuration
├── package.json
├── next.config.js
├── pages/
├── public/
└── README.md
```


---

## ⚙️ Local Setup

### 1️⃣ Clone the Repository
```bash

git clone https://github.com/Sagolsa78/Next-Starter-docker.git

cd nextjs-starter


npm install


npm run dev

```


## 🐳 Docker Setup

# 1️⃣ Build the Docker Image

```
docker build -t nextjs-local:latest .


```


## 2️⃣ Run the Container

```
docker run -d -p 3000:3000 nextjs-local:latest



Visit http://localhost:3000

```




## ☸️ Kubernetes Deployment (Minikube)


# 1️⃣ Start Minikube

```
minikube start

```
# 2️⃣ Build Image for Minikube

```
eval $(minikube docker-env)
docker build -t nextjs-local:latest .

```

# 3️⃣ Apply Manifests

```
kubectl apply -f starter/

```

# 4️⃣ Check Deployment

```
kubectl get pods
kubectl get svc

```

# 5️⃣ Access the Application

```
minikube service nextjs-service
```



## 🧑‍💻 Author

Name: Mohit Sahani
Email: sahanimohit5ed@gmail.com

GitHub: github.com/sagolsa78

💡 This project demonstrates a full CI/CD DevOps pipeline — containerization, automation, and Kubernetes deployment.