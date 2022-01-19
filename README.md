# TATGenealogy
 genealogy of TAT

## how to view
visit https://tituman.github.io/TATGenealogy/

## how to use

using the [mermaid.js](https://mermaid-js.github.io/) framework.

the following code in [index.hmtl](index.hmtl)

```HTML
<div class="mermaid">
graph TD
subgraph OG-Cube
A --> B
B --> C
A --> C
C --> D
end
</div>
```

will generate the following tree

![](./files/sample.png)

### strain details
to add information for a specific strain, file [strainDB.js](strainDB.js) can be edited by adding a new line at the end from the template.
```
...
,'NewStrain' : 'NewStrain: <p>found by __, strainA x strainB</p>'
...
};
```
