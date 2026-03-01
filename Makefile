SHELL := /bin/bash
COMPOSE := docker compose -f docker-compose.dev.yml

.PHONY: up down logs build lint shell-demo clean

# ── Stack ──────────────────────────────────────────────────────────────────────
up:
	$(COMPOSE) up -d
	@echo "✅ Demo: http://localhost:5174"

down:
	$(COMPOSE) down

logs:
	$(COMPOSE) logs -f

restart:
	$(COMPOSE) restart

build:
	$(COMPOSE) build

# ── Quality ────────────────────────────────────────────────────────────────────
lint:
	$(COMPOSE) exec demo npm run lint
	$(COMPOSE) exec demo npm run lint:css
	$(COMPOSE) exec demo npm run lint:format
	@echo "✅ All linters passed"

# ── Dev helpers ────────────────────────────────────────────────────────────────
shell-demo:
	$(COMPOSE) exec demo sh

# ── Cleanup ────────────────────────────────────────────────────────────────────
clean:
	$(COMPOSE) down -v
	rm -rf packages/react/node_modules demo/node_modules
