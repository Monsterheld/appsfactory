.PHONY: test
test:
	yarn test

.PHONY: bootstrap
bootstrap:
	yarn

.PHONY: lint-fix
lint-fix:
	yarn lint:fix

.PHONY: test-feature
test-feature:
ifndef feature
	@echo 'feature is not set'
else
	yarn wdio wdio.conf.js --spec='./test/features/'$(feature)'.feature'
endif
