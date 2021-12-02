var documenterSearchIndex = {"docs":
[{"location":"datatypes/#The-DataType","page":"The DataType","title":"The DataType","text":"","category":"section"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"CurrentModule = Zd_Arithmetics\nDocTestSetup = quote\n    using Zd_Arithmetics\nend","category":"page"},{"location":"datatypes/#The-main-data-type","page":"The DataType","title":"The main data-type","text":"","category":"section"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"Modules = [Zd_Arithmetics]\nOrder = [:type]\nPrivate = false","category":"page"},{"location":"datatypes/#Core.AbstractFloat-Union{Tuple{ℤd{T, d}}, Tuple{d}, Tuple{T}} where {T<:Integer, d}","page":"The DataType","title":"Core.AbstractFloat","text":"AbstractFloat(x::ℤd{T,d}) where {T <: Integer, d}\n\nConverts a given ℤd{T, d} to a general Float. Used mostly internal by Julia. See convert(::Type{K}, x::ℤd{T, d}) for more details on conversion.\n\n\n\n\n\n","category":"method"},{"location":"datatypes/#Core.Int-Union{Tuple{ℤd{T, d}}, Tuple{d}, Tuple{T}} where {T<:Integer, d}","page":"The DataType","title":"Core.Int","text":"Int(x::ℤd{T,d}) where {T <: Integer, d}\n\nConverts a given ℤd{T, d} to a general Integer. Used mostly internal by Julia. See convert(::Type{K}, x::ℤd{T, d}) for more details on conversion.\n\n\n\n\n\n","category":"method"},{"location":"datatypes/#Zd_Arithmetics.ℤd","page":"The DataType","title":"Zd_Arithmetics.ℤd","text":"ℤd{T <: Integer, d} <: Integer\n\nThe  following immutable struct stores a value of type T <: Integer modulo d.\n\nThe type T is customizable, but should be choosen as the smallest Integer type that fits d. For normal use cases, Int8 is enough.\n\nExample:\n\nℤd{Int8, 2}(1) # stores a 1\nℤd{Int8, 2}(2) # stores mod(2,2) = 0\n\nFor convenience it is recommended to use type aliases if you (mostly) work with fixed d:\n\n# Define a type alias for the integers modulo two\nconst ℤ₂ = ℤd{Bool, 2}\n# Define a type alias for the integers modulo three\nconst ℤ₃ = ℤd{Int8, 3}\n\nAnother method is to use the provided type aliases via import:\n\nℤ₂ = Zd_Arithmetics.Z2\nℤ₂ = Zd_Arithmetics.ℤ₂\n\nor\n\nimport Zd_Arithmetics.Z2\nimport Zd_Arithmetics.ℤ₂\n\n\n\n\n\n","category":"type"},{"location":"datatypes/#Zd_Arithmetics.ℤd-Union{Tuple{ℤd{T, d′}}, Tuple{d′}, Tuple{d}, Tuple{T}} where {T<:Integer, d, d′}","page":"The DataType","title":"Zd_Arithmetics.ℤd","text":"ℤd{T, d}(x::ℤd{T, d′}; force=false)::ℤd{T,d} where {T <: Integer, d, d′}\n\nUpwards converting from ℤd′ to ℤd for d′ < d (possible, because mathbbZ_d subset mathbbZ_d for d  d).\n\nFor d == d′ the original x will be returned.\n\nFor d > d′ an error is thrown if the optional parameter force is not true (default: false). If the force flag is enabled, then the value of x will be mapped to x mod d regardless of d or d′ (possible loss of information).\n\n\n\n\n\n","category":"method"},{"location":"datatypes/#Non-exported-aliases","page":"The DataType","title":"Non-exported aliases","text":"","category":"section"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"To use one of the following type aliases, just import/declare them like this","category":"page"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"Z2 = Zd_Arithmetics.Z2 # allows renaming\n# or\nimport Zd_Arithmetics.Z2","category":"page"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"Apart from that, you can always define your own alias as described above. For the mathbbZ_2 case it's best to import the type alias from the package, since then the specialized simplified operations can be used.","category":"page"},{"location":"datatypes/","page":"The DataType","title":"The DataType","text":"Modules = [Zd_Arithmetics]\nOrder = [:type]\nPublic = false","category":"page"},{"location":"datatypes/#Zd_Arithmetics.ℤ₂","page":"The DataType","title":"Zd_Arithmetics.ℤ₂","text":"ℤ₂ = ℤd{Bool, 2}\nZ2 = ℤ₂\n\nType aliases for integers modulo 2.\n\nThe type T is set to Bool instead of Int8 for performance-reasons. The simplified operations for the ℤ₂ case can be found at the bottom of operations.jl.\n\n\n\n\n\n","category":"type"},{"location":"datatypes/#Zd_Arithmetics.ℤ₃","page":"The DataType","title":"Zd_Arithmetics.ℤ₃","text":"ℤ₃ = ℤd{Int8, 3}\nZ3 = ℤ₃\n\nType aliases for integers modulo 3.\n\n\n\n\n\n","category":"type"},{"location":"datatypes/#Zd_Arithmetics.ℤ₄","page":"The DataType","title":"Zd_Arithmetics.ℤ₄","text":"ℤ₄ = ℤd{Int8, 4}\nZ4 = ℤ₄\n\nType aliases for integers modulo 4.\n\n\n\n\n\n","category":"type"},{"location":"datatypes/#Zd_Arithmetics.ℤ₅","page":"The DataType","title":"Zd_Arithmetics.ℤ₅","text":"ℤ₅ = ℤd{Int8, 5}\nZ5 = ℤ₅\n\nType aliases for integers modulo 5.\n\n\n\n\n\n","category":"type"},{"location":"datatypes/#Zd_Arithmetics.ℤ₆","page":"The DataType","title":"Zd_Arithmetics.ℤ₆","text":"ℤ₆ = ℤd{Int8, 6}\nZ6 = ℤ₆\n\nType aliases for integers modulo 6.\n\n\n\n\n\n","category":"type"},{"location":"#Zd_Arithmetics.jl-Documentation","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"","category":"section"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"CurrentModule = Zd_Arithmetics\nDocTestSetup = quote\n    using Zd_Arithmetics\nend","category":"page"},{"location":"#Installation","page":"Zd_Arithmetics.jl Documentation","title":"Installation","text":"","category":"section"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"] add git@github.com:Fhoeddinghaus/Zd_Arithmetics.jl.git","category":"page"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"or ","category":"page"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"] add https://github.com/Fhoeddinghaus/Zd_Arithmetics.jl.git","category":"page"},{"location":"#Contents","page":"Zd_Arithmetics.jl Documentation","title":"Contents","text":"","category":"section"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"Pages = [\"datatypes.md\", \"operations.md\"]\nDepth = 3","category":"page"},{"location":"#Index","page":"Zd_Arithmetics.jl Documentation","title":"Index","text":"","category":"section"},{"location":"","page":"Zd_Arithmetics.jl Documentation","title":"Zd_Arithmetics.jl Documentation","text":"","category":"page"},{"location":"operations/#Operations","page":"Operations","title":"Operations","text":"","category":"section"},{"location":"operations/","page":"Operations","title":"Operations","text":"CurrentModule = Zd_Arithmetics\nDocTestSetup = quote\n    using Zd_Arithmetics\nend","category":"page"},{"location":"operations/","page":"Operations","title":"Operations","text":"Modules = [Zd_Arithmetics]\nOrder = [:function]","category":"page"},{"location":"operations/#Base.:*-Tuple{ℤd{Bool, 2}, ℤd{Bool, 2}}","page":"Operations","title":"Base.:*","text":"+(x::ℤ₂, y::ℤ₂)\n\nSpecial case of multiplication in ℤ₂ using Booleans.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:*-Union{Tuple{d}, Tuple{T}, Tuple{Integer, ℤd{T, d}}} where {T<:Integer, d}","page":"Operations","title":"Base.:*","text":"*(a::Integer, b::ℤd{T, d}) where {T <: Integer, d}\n\nEnables ℤ × ℤd → ℤd multiplication.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:*-Union{Tuple{d}, Tuple{T}, Tuple{ℤd{T, d}, ℤd{T, d}}} where {T<:Integer, d}","page":"Operations","title":"Base.:*","text":"*(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}\n\nMultiplies the values of a and b modulo d and returns a new ℤd{T, d}\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:+-Tuple{ℤd{Bool, 2}, ℤd{Bool, 2}}","page":"Operations","title":"Base.:+","text":"+(x::ℤ₂, y::ℤ₂)\n\nSpecial case of addition in ℤ₂ using Booleans.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:+-Union{Tuple{d}, Tuple{T}, Tuple{ℤd{T, d}, ℤd{T, d}}} where {T<:Integer, d}","page":"Operations","title":"Base.:+","text":"+(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}\n\nAdds the values of a and b modulo d and returns a new ℤd{T, d}\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:--Tuple{ℤd{Bool, 2}, ℤd{Bool, 2}}","page":"Operations","title":"Base.:-","text":"-(x::ℤ₂, y::ℤ₂)\n\nSpecial case of subtraction in ℤ₂ using Booleans.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:--Union{Tuple{d}, Tuple{T}, Tuple{ℤd{T, d}, ℤd{T, d}}} where {T<:Integer, d}","page":"Operations","title":"Base.:-","text":"-(a::ℤd{T, d}, b::ℤd{T, d}) where {T <: Integer, d}\n\nSubtracts the value of b from a modulo d and returns a new ℤd{T, d} (always positive).\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.:--Union{Tuple{ℤd{T, d}}, Tuple{d}, Tuple{T}} where {T<:Integer, d}","page":"Operations","title":"Base.:-","text":"-(x::ℤd{T,d}) where {T <: Integer, d}\n\nNegating x in ℤd yields again x.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.convert-Union{Tuple{d}, Tuple{T}, Tuple{K}, Tuple{Type{K}, ℤd{T, d}}} where {K<:Number, T<:Integer, d}","page":"Operations","title":"Base.convert","text":"convert(::Type{K}, x::ℤd{T, d}) where {K <: Number, T <: Integer, d}\n\nConverts a given ℤd{T, d} to a general number without mod d-logic.\n\nThis is usefull for many more complex operations and definitions of functions that live outside ℤd. Also, some external functions are not reimplemented, therefore they can only be used if ℤd{T, d} is treated like a normal number. If the function-result should again map to ℤd{T, d}, remember to convert the result back to ℤd{T, d}.\n\ninfo: Info\nIf the external function returns floating point values, it's necessary to convert them back to Integers first using something like# rounding a float x to the next integer and converting it back to an integer.\nInt(round(x; digits=0))\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.inv-Union{Tuple{Array{ℤd{T, d}, 2}}, Tuple{d}, Tuple{T}} where {T<:Integer, d}","page":"Operations","title":"Base.inv","text":"inv(A::Matrix{ℤd{T, d}})\n\nInvert a matrix A in ℤd by multiplying the inverse in ℝ with the determinant.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.promote_rule-Union{Tuple{d}, Tuple{Type{Bool}, Type{ℤd{Bool, 2}}}} where d","page":"Operations","title":"Base.promote_rule","text":"Promote the ℤ₂ type over Bool.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.promote_rule-Union{Tuple{d}, Tuple{T}, Tuple{Type{T}, Type{ℤd{T, d}}}} where {T<:Integer, d}","page":"Operations","title":"Base.promote_rule","text":"Promote the ℤd{T, d} type over T.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.show-Tuple{IO, ℤd{Bool, 2}}","page":"Operations","title":"Base.show","text":"show(io::IO, x::ℤ₂)\n\nSpecial case of pretty-printing in ℤ₂ using Booleans.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.show-Union{Tuple{d}, Tuple{T}, Tuple{IO, ℤd{T, d}}} where {T<:Integer, d}","page":"Operations","title":"Base.show","text":"show(io::IO, x::ℤd{T, d}) where {T <: Integer, d}\n\nPretty-printing for ℤd as Integers.\n\n\n\n\n\n","category":"method"},{"location":"operations/#Base.trailing_zeros-Union{Tuple{ℤd{T, d}}, Tuple{d}, Tuple{T}} where {T<:Integer, d}","page":"Operations","title":"Base.trailing_zeros","text":"trailing_zeros(x::ℤd{T, d}) where {T <: Integer, d}\n\nInternal Julia function needed in some cases, like when using Sets. Passes the call down to the value of x.\n\n\n\n\n\n","category":"method"}]
}
