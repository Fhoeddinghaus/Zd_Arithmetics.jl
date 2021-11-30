module Zd_Arithmetics

import Base: +, -, *, convert, show, trailing_zeros

export 

    ℤd,
    +,
    -,
    *,
    convert,
    show,
    trailing_zeros,
    Int

include("datatype.jl")
include("operations.jl")

end # module
