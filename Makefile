deploy: BUCKET = $(shell python3 -c "import json; print(json.load(open('config.json'))['bucket']);")
deploy:
	(cd dist; aws s3 cp * ${BUCKET})
