deploy: BUCKET = $(shell python3 -c "import json; print(json.load(open('config.json'))['bucket']);")
deploy: SHELL:=/bin/bash
deploy:
	@if [ "${BUCKET}" = "" ]; then \
		echo ${BUCKET}; \
		echo ⚠️Please set the AWS S3 destination \(bucket\) in config.json; \
	else \
		brew install awscli; \
		aws s3 cp dist ${BUCKET}; \
	fi

