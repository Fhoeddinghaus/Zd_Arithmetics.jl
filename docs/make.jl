push!(LOAD_PATH,"../src/")

using Documenter, Zd_Arithmetics

makedocs(
    sitename="Zd_Arithmetics.jl",
    authors = "Felix Höddinghaus",
    pages = [
        "index.md",
        "datatypes.md",
        "operations.md",
    ],
)

# show documentation locally after generating with 
#   python3 -m http.server --bind localhost