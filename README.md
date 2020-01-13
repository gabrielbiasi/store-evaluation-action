# store-evaluation-action
Action to store evaluation in Tryber projects

This action store evaluations from Tryber projects.

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
