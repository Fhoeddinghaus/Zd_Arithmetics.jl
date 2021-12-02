module Zd_Arithmetics

using LinearAlgebra

import Base: +, -, *, convert, promote_rule, show, trailing_zeros, Int, AbstractFloat, inv

export 

    ℤd,
    +,
    -,
    *,
    convert,
    promote_rule,
    show,
    trailing_zeros,
    Int,
    AbstractFloat,
    inv

include("datatype.jl")
include("operations.jl")

end # module
