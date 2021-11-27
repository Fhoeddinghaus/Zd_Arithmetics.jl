module Zd_Arithmetics

import Base: +, -, *, convert, show

export 

    ℤd,
    +,
    -,
    *,
    convert,
    show

include("datatype.jl")
include("operations.jl")

end # module
