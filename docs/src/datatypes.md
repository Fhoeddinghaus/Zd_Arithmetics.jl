# The DataType

```@meta
CurrentModule = Zd_Arithmetics
DocTestSetup = quote
    using Zd_Arithmetics
end
```

## The main data-type

```@autodocs
Modules = [Zd_Arithmetics]
Order = [:type]
Private = false
```

## Non-exported aliases

To use one of the following type aliases, just import/declare them like this

```julia
Z2 = Zd_Arithmetics.Z2 # allows renaming
# or
import Zd_Arithmetics.Z2
```

Apart from that, you can always define your own alias as described above.
For the ``\mathbb{Z}_2`` case it's best to import the type alias from the package, since then the specialized simplified operations can be used.

```@autodocs
Modules = [Zd_Arithmetics]
Order = [:type]
Public = false
```