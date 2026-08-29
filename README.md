# devops-test-app

Minimal Node.js app for testing an Azure DevOps pipeline: install → test → Docker build.

## Local usage

```bash
npm install
npm test        # runs jest, outputs JUnit XML to test-results/junit.xml
npm start        # runs the server on port 3000
docker build -t devops-test-app .
docker run -p 3000:3000 devops-test-app
```

Endpoints once running: `GET /` and `GET /health`.

## Wiring up the Azure DevOps pipeline

1. Push this repo to Azure Repos (or GitHub/GitLab connected to your Azure DevOps org).
2. In Azure DevOps: **Pipelines → New Pipeline** → point it at this repo.
3. Choose **Existing Azure Pipelines YAML file** and select `azure-pipelines.yml`.
4. Run it. It will:
   - Install Node 20 and run `npm ci`
   - Run `npm test` and publish JUnit results to the pipeline's Tests tab
   - Build a Docker image (tagged with the build ID and `latest`)

No Azure resources or service connections are required for this pipeline as written — the
Docker step only builds the image locally on the agent, it doesn't push anywhere. If you
want to push to a registry (ACR, Docker Hub, etc.), add a `Docker@2` push step and a
service connection.
