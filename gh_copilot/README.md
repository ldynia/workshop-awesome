# Environment 

```console
docker run -it --rm --name demo -v $PWD:/src -w /src python:3.9-alpine ash
docker run -it --rm --name demo -v $PWD:/src -w /src node:slim bash
```

# Setup

```console
pip install -r requirements.txt
npm install
```

# Testing

```console
. demo.sh
node demo.js
python3 demo.py
```