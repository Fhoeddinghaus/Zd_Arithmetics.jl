"""
    ℤd{T <: Integer, d} <: Integer

The  following immutable struct stores a value of type `T <: Integer` modulo `d`.

The type `T` is customizable, but should be choosen as the smallest `Integer` type that fits `d`.
For normal use cases, `Int8` is enough.

Example:
```julia
ℤd{Int8, 2}(1) # stores a 1
ℤd{Int8, 2}(2) # stores mod(2,2) = 0
```

For convenience it is recommended to use type aliases if you (mostly) work with fixed `d`:

```julia
# Define a type alias for the integers modulo two
const ℤ₂ = ℤd{Bool, 2}
# Define a type alias for the integers modulo three
const ℤ₃ = ℤd{Int8, 3}
```
Another method is to use the provided type aliases via `import`:

    ℤ₂ = Zd_Arithmetics.Z2
    ℤ₂ = Zd_Arithmetics.ℤ₂
or

    import Zd_Arithmetics.Z2
    import Zd_Arithmetics.ℤ₂


"""
struct ℤd{T <: Integer, d} <: Integer
    value::T
    ℤd{T, d}(x::Integer) where {T <: Integer, d} = new(T(mod(x, d)))
end

"""
    ℤd{T, d}(x::ℤd{T, d′}; force=false)::ℤd{T,d} where {T <: Integer, d, d′}

Upwards converting from `ℤd′` to `ℤd` for `d′ < d` (possible, because ``\\mathbb{Z}_{d'} \\subset \\mathbb{Z}_d`` for ``d' < d``).

For `d == d′` the original `x` will be returned.

For `d > d′` an error is thrown if the optional parameter `force` is not `true` (default: `false`).
If the `force` flag is enabled, then the value of `x` will be mapped to ``x \\mod d`` regardless of `d` or `d′` (possible loss of information).
"""
function ℤd{T, d}(x::ℤd{T, d′}; force=false) where {T <: Integer, d, d′}
    if d < d′ && !force
        # do not allow conversion from Zd′ → Zd
        throw("Modulus mismatch: can only convert from one subset to a superset! ℤ$d ⊂ ℤ$d′. Use force=true if you want to convert anyways (possible loss of information)")
    elseif d == d′
        # no conversion needed
        return x
    else
        # convert
        return ℤd{T, d}(x.value)
    end
end



# some type aliases, that are not exported by default
"""
    ℤ₂ = ℤd{Bool, 2}
    Z2 = ℤ₂

Type aliases for integers modulo 2.

The type `T` is set to `Bool` instead of `Int8` for performance-reasons.
The simplified operations for the ℤ₂ case can be found at the bottom of operations.jl.
"""
const ℤ₂ = ℤd{Bool, 2}
const Z2 = ℤ₂

"""
    ℤ₃ = ℤd{Int8, 3}
    Z3 = ℤ₃

Type aliases for integers modulo 3.
"""
const ℤ₃ = ℤd{Int8, 3}
const Z3 = ℤ₃

"""
    ℤ₄ = ℤd{Int8, 4}
    Z4 = ℤ₄

Type aliases for integers modulo 4.
"""
const ℤ₄ = ℤd{Int8, 4}
const Z4 = ℤ₄

"""
    ℤ₅ = ℤd{Int8, 5}
    Z5 = ℤ₅

Type aliases for integers modulo 5.
"""
const ℤ₅ = ℤd{Int8, 5}
const Z5 = ℤ₅

"""
    ℤ₆ = ℤd{Int8, 6}
    Z6 = ℤ₆

Type aliases for integers modulo 6.
"""
const ℤ₆ = ℤd{Int8, 6}
const Z6 = ℤ₆