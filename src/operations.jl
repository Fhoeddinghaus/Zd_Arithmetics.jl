# providing the necessary arithmetic functions

"""
    +(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}

Adds the values of `a` and `b` modulo `d` and returns a new ℤd{T, d}
"""
+(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d} = ℤd{T,d}(T(mod(a.value + b.value, d)))

"""
    -(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}

Subtracts the value of `b` from `a` modulo `d` and returns a new ℤd{T, d} (always positive).
"""
-(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d} = ℤd{T,d}(T(mod(a.value - b.value, d)))

"""
    *(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}

Multiplies the values of `a` and `b` modulo `d` and returns a new ℤd{T, d}
"""
*(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d} = ℤd{T,d}(T(mod(a.value * b.value, d)))

"""
    *(a::Integer, b::ℤd{T, d}) where {T <: Integer, d}

Enables ℤ × ℤd → ℤd multiplication.
"""
*(a::Integer, b::ℤd{T, d}) where {T <: Integer, d} = ℤd{T,d}(T(mod(a * b.value, d)))
*(a::ℤd{T, d}, b::Integer) where {T <: Integer, d} = b * a

"""
    convert(::Type{K}, x::ℤd{T, d}) where {K <: Number, T <: Integer, d}

Converts a given ℤd{T, d} to a general number without `mod d`-logic.

This is usefull for many more complex operations and definitions of functions that live outside ℤd.
Also, some external functions are not reimplemented, therefore they can only be used if ℤd{T, d} is treated like a normal number.
If the function-result should again map to ℤd{T, d}, remember to convert the result back to ℤd{T, d}.

!!! info
    If the external function returns floating point values, it's necessary to convert them back to Integers first using something like
    ```julia
    # rounding a float x to the next integer and converting it back to an integer.
    Int(round(x; digits=0))
    ```
"""
convert(::Type{K}, x::ℤd{T, d}) where {K <: Number, T <: Integer, d} = convert(K, x.value)

"""
    show(io::IO, x::ℤd{T, d}) where {T <: Integer, d}

Pretty-printing for ℤd as Integers.
"""
show(io::IO, x::ℤd{T, d}) where {T <: Integer, d} = print(io, x.value)


# There may be special cases where we want to simplify the operations, these can be appended below
# The special case handled here is for d = 2

"""
    +(x::ℤ₂, y::ℤ₂)

Special case of addition in ℤ₂ using Booleans.
"""
+(x::ℤ₂, y::ℤ₂) = ℤ₂(x.value != y.value)

"""
    -(x::ℤ₂, y::ℤ₂)

Special case of subtraction in ℤ₂ using Booleans.
"""
-(x::ℤ₂, y::ℤ₂) = ℤ₂(x.value != y.value)

"""
    +(x::ℤ₂, y::ℤ₂)

Special case of multiplication in ℤ₂ using Booleans.
"""
*(x::ℤ₂, y::ℤ₂) = ℤ₂(x.value * y.value)

"""
    show(io::IO, x::ℤ₂)

Special case of pretty-printing in ℤ₂ using Booleans.
"""
show(io::IO, x::ℤ₂) = print(io, Int8(x.value))