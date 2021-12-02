module Zd_Arithmetics

using LinearAlgebra

import Base: +, -, *, convert, show, trailing_zeros, Int, AbstractFloat, inv

export 

    ℤd,
    +,
    -,
    *,
    convert,
    show,
    trailing_zeros,
    Int,
    AbstractFloat,
    inv

include("datatype.jl")
include("operations.jl")

end # module
