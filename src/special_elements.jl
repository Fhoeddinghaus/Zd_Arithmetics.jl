#=
## This is not needed anymore, because of the constructor redefinition to accept x::Integers and converts T(x) instead of accepting x::T.
This automatically enables the zero and one functions.

# creates some special elements
import Base.zero

"""
    zero(::ℤd{T, d})
or
    zero(x::ℤd{T, d})

Returns the zero element ℤd{T, d}(T(0)).
"""
zero(::ℤd{T, d}) where {T <: Integer, d} = ℤd{T, d}(T(0))
zero(x::ℤd{T, d}) where {T <: Integer, d} = ℤd{T, d}(T(0))
=#