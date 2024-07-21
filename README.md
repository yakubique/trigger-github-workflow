# Trigger Github workflow

[![Coverage](./badges/coverage.svg)](./badges/coverage.svg)
[![Test `trigger-github-workflow` action](https://github.com/yakubique/trigger-github-workflow/actions/workflows/test-myself.yaml/badge.svg)](https://github.com/yakubique/trigger-github-workflow/actions/workflows/test-myself.yaml)

Trigger Github workflow as an action


[Usage workflow](https://github.com/yakubique/trigger-github-workflow/actions/workflows/test-myself.yaml)

## Usage

Don't forget to elevate permissions:
```yaml
permissions:
  actions: write
```

Master workflow:
```yaml
- name: Trigger Github workflow
  uses: yakubique/trigger-github-workflow@v1
  with:
    repository: yakubique/test-repository
    workflow: build-and-push.yaml
```

Callable workflow needs:
```yaml
on:
  workflow_dispatch:
```

## Inputs

<!-- AUTO-DOC-INPUT:START - Do not remove or modify this section -->

|   INPUT    |  TYPE  | REQUIRED |         DEFAULT         |            DESCRIPTION             |
|------------|--------|----------|-------------------------|------------------------------------|
|   params   | string |  false   |                         | Workflow parameters as JSON string |
|    ref     | string |   true   |        `"main"`         |          Reference branch          |
| repository | string |   true   |                         |          Owner/repository          |
|   token    | string |   true   | `"${{ github.token }}"` |            Github token            |
|  workflow  | string |   true   |                         | Workflow ID or workflow's filename |

<!-- AUTO-DOC-INPUT:END -->




## Outputs

<!-- AUTO-DOC-OUTPUT:START - Do not remove or modify this section -->

| OUTPUT |  TYPE  |       DESCRIPTION        |
|--------|--------|--------------------------|
| result | string | Response from Github API |

<!-- AUTO-DOC-OUTPUT:END -->



----

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/S6S1UZ9P7)
