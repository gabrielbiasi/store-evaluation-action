# store-evaluation-action
Action to store evaluation in Tryber projects

This action receives evaluation data from an evaluator and store it in Forest Admin.

## Inputs

### `evaluation-data`

JSON with structure below in the base64 format:

```json
{
  "github_username": "String",
  "github_repository_name": "String",
  "evaluations": [{
    "requirement_id": "Integer",
    "grade": "Integer"
  }, {...}]
}
```

### `environment`

Must be:

- development
- staging
- production

### `pr-number`

Pull Request number that trigger build.

## Outputs

## Simple usage example
```yml
uses: betrybe/store-evaluation-action
```

## How to get evaluation data from an evaluator
```yml
- name: Jest evaluator
  id: evaluator
  uses: betrybe/jest-evaluator-action
- name: Store evaluation action
  uses: betrybe/store-evaluation-action
  with:
    evaluation-data: ${{ steps.evaluator.outputs.result }}
```

## Learn about GitHub Actions

- https://help.github.com/en/actions/automating-your-workflow-with-github-actions/creating-a-docker-container-action
