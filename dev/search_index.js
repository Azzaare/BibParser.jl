var documenterSearchIndex = {"docs":
[{"location":"bibtex_automa/","page":"-","title":"-","text":"","category":"page"},{"location":"bibtex_automa/","page":"-","title":"-","text":"<!– @autodocs Modules = [BibParser.BibTeXAutoma] Pages   = [\"bibtex_automa.jl\"] –>","category":"page"},{"location":"internal/","page":"Internal","title":"Internal","text":"","category":"page"},{"location":"internal/","page":"Internal","title":"Internal","text":"Modules = [BibInternal]","category":"page"},{"location":"internal/#BibInternal.entries","page":"Internal","title":"BibInternal.entries","text":"const entries = [\n    :article,\n    :book,\n    :booklet,\n    :inbook,\n    :incollection,\n    :inproceedings,\n    :manual,\n    :masterthesis,\n    :misc,\n    :phdthesis,\n    :proceedings,\n    :techreport,\n    :unpublished,\n]\n\nList of possible entries (currently based on bibtex). Keep it sorted for readability.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.fields","page":"Internal","title":"BibInternal.fields","text":"const fields = [\n    :address,\n    :annote,\n    :archivePrefix,\n    :author,\n    :booktitle,\n    :chapter,\n    :crossref,\n    :edition,\n    :editor,\n    :eprint,\n    :howpublished,\n    :institution,\n    :journal,\n    :key,\n    :month,\n    :note,\n    :number,\n    :organization,\n    :pages,\n    :primaryClass,\n    :publisher,\n    :school,\n    :series,\n    :title,\n    :type,\n    :volume,\n    :year\n]\n\nList of possible fields (currently based on bibtex). Keep it sorted for readability\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.maxfieldlength","page":"Internal","title":"BibInternal.maxfieldlength","text":"const maxfieldlength\n\nFor output formatting purpose, for instance, export to BibTeX format.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.rules","page":"Internal","title":"BibInternal.rules","text":"const rules = Dict([\n    \"article\"       => [\"author\", \"journal\", \"title\", \"year\"]\n    \"book\"          => [(\"author\", \"editor\"), \"publisher\", \"title\", \"year\"]\n    \"booklet\"       => [\"title\"]\n    \"eprint\"        => [\"author\", \"eprint\", \"title\", \"year\"]\n    \"inbook\"        => [(\"author\", \"editor\"), (\"chapter\", \"pages\"), \"publisher\", \"title\", \"year\"]\n    \"incollection\"  => [\"author\", \"booktitle\", \"publisher\", \"title\", \"year\"]\n    \"inproceedings\" => [\"author\", \"booktitle\", \"title\", \"year\"]\n    \"manual\"        => [\"title\"]\n    \"masterthesis\"  => [\"author\", \"school\", \"title\", \"year\"]\n    \"misc\"          => []\n    \"phdthesis\"     => [\"author\", \"school\", \"title\", \"year\"]\n    \"proceedings\"   => [\"title\", \"year\"]\n    \"techreport\"    => [\"author\", \"institution\", \"title\", \"year\"]\n    \"unpublished\"   => [\"author\", \"note\", \"title\"]\n])\n\nList of BibTeX rules bases on the entry type. A field value as a singleton represents a required field. A pair of values represents mutually exclusive required fields.\n\n\n\n\n\n","category":"constant"},{"location":"internal/#BibInternal.AbstractEntry","page":"Internal","title":"BibInternal.AbstractEntry","text":"abstract type AbstractEntry end\n\nAbstract Entry supertype.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Access","page":"Internal","title":"BibInternal.Access","text":"struct Access\n    doi::String\n    howpublished::String\n    url::String\nend\n\nStore the online access of an entry as a String. Handles the fields doi and url and the arXiV entries. For additional fields or entries, please fill an issue or make a pull request.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Access-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.Access","text":"Access(fields::Fields)\n\nConstruct the online access information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Date","page":"Internal","title":"BibInternal.Date","text":"struct Date\n    day::String\n    month::String\n    year::String\nend\n\nStore the date information as day, month, and year.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Date-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.Date","text":"Date(fields::Fields)\n\nConstruct the date information based on the entry fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Entry","page":"Internal","title":"BibInternal.Entry","text":"struct Entry <: AbstractEntry\n    access::Access\n    authors::Names\n    booktitle::String\n    date::Date\n    editors::Names\n    eprint::Eprint\n    id::String\n    in::In\n    fields::Dict{String,String}\n    title::String\n    type::String\nend\n\nGeneric Entry type. If some construction rules are required, it should be done beforehand. Check bibtex.jl as the example of rules implementation for BibTeX format.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Entry-Tuple{String,Dict{String,String}}","page":"Internal","title":"BibInternal.Entry","text":"Entry(id::String, fields::Fields)\n\nConstruct an entry with a unique id and a list of Fields.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Eprint","page":"Internal","title":"BibInternal.Eprint","text":"struct Eprint\n    archive_prefix::String\n    eprint::String\n    primary_class::String\nend\n\nStore the information related to arXiv eprint format.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.Eprint-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.Eprint","text":"Eprint(fields::Fields)\n\nConstruct the eprint arXiv information based on the entry fields. Handle old and current arXiv format.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Fields","page":"Internal","title":"BibInternal.Fields","text":"Fields = Dict{String, String}\n\nStores the fields (name => value) of an entry.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.In","page":"Internal","title":"BibInternal.In","text":"struct In\n    address::String\n    chapter::String\n    edition::String\n    institution::String\n    journal::String\n    number::String\n    organization::String\n    pages::String\n    publisher::String\n    school::String\n    series::String\n    volume::String\nend\n\nStore all the information related to how an entry was published.\n\n\n\n\n\n","category":"type"},{"location":"internal/#BibInternal.In-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.In","text":"In(fields::Fields)\n\nConstruct the information of how an entry was published based on its fields\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.Name-Tuple{String}","page":"Internal","title":"BibInternal.Name","text":"Name(str::String)\n\nDecompose without ambiguities a name as particle (optional) last, junior (optional), first middle (optional) based on BibTeX possible input. As for BibTeX, the decomposition of a name in the form of first last is also possible, but ambiguities can occur.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.arxive_url-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.arxive_url","text":"arxive_url(fields::Fields)\n\nMake an arxiv url from an eprint entry. Work with both old and current arxiv BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.check_entry-Tuple{Dict{String,String}}","page":"Internal","title":"BibInternal.check_entry","text":"check_entry(fields::Fields)\n\nCheck the validity of the fields of a BibTeX entry.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.erase_spaces-Tuple{String}","page":"Internal","title":"BibInternal.erase_spaces","text":"erase_spaces(str::String)\n\nErase extra spaces, i.e. r\"[  ]+\", from str and return a new string.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.get_delete!-Tuple{Dict{String,String},String}","page":"Internal","title":"BibInternal.get_delete!","text":"get_delete!(fields::Fields, key::String)\n\nGet a the value of a field and delete it afterward.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.make_bibtex_entry-Tuple{String,Dict{String,String}}","page":"Internal","title":"BibInternal.make_bibtex_entry","text":"make_bibtex_entry(id::String, fields::Fields)\n\nMake an entry if the entry follows the BibTeX guidelines. Throw an error otherwise.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.names-Tuple{String}","page":"Internal","title":"BibInternal.names","text":"names(str::String)\n\nDecompose into parts a list of names in BibTeX compatible format. That is names sparated by and.\n\n\n\n\n\n","category":"method"},{"location":"internal/#BibInternal.space-Tuple{Symbol}","page":"Internal","title":"BibInternal.space","text":"space(field::Symbol)\n\nReturn the amount of spaces needed to export entries, for instance to BibTeX format.\n\n\n\n\n\n","category":"method"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"","category":"page"},{"location":"bibtex/","page":"BibTeX","title":"BibTeX","text":"Modules = [BibParser.BibTeX]\nPages   = [\"bibtex.jl\"]","category":"page"},{"location":"bibtex/#BibParser.BibTeX.parse_bibtex-Tuple{Any}","page":"BibTeX","title":"BibParser.BibTeX.parse_bibtex","text":"parse_bibtex(text)\n\nThis is a simple input parser for BibTex. I had trouble finding a standard specification, but I've included several features of real BibTex. Returns a preamble (or an empty string) and a dict of dicts.\n\njulia> using BibTeX\njulia> preamble, result = parse_bibtex(\"\"\"\n            @preamble{some instructions}\n            @comment blah blah\n            @string{short = long}\n            @a{b,\n              c = { {c} c},\n              d = \"d d\",\n              e = f # short\n            }\n            \"\"\");\njulia> preamble\n\"some instructions\"\njulia> result[\"b\"][\"type\"]\n\"a\"\njulia> result[\"b\"][\"c\"]\n\"{ c } c\"\njulia> result[\"b\"][\"d\"]\n\"d d\"\njulia> result[\"b\"][\"e\"]\n\"f short\"\njulia> parse_bibtex(\"@book\")\nERROR: Expected { on line 1\n[...]\njulia> parse_bibtex(\"@book@\")\nERROR: Expected { on line 1\n[...]\n\n\n\n\n\n","category":"method"},{"location":"","page":"BibParser","title":"BibParser","text":"","category":"page"},{"location":"","page":"BibParser","title":"BibParser","text":"Modules = [BibParser]\nPages   = [\"BibParser.jl\"]","category":"page"},{"location":"#BibParser.parse_entry-Tuple{String}","page":"BibParser","title":"BibParser.parse_entry","text":"parse_entry(entry::String; parser::Symbol = :BibTeX)\n\nParse a string entry. Default to BibTeX format. No other options available yet (CSL-JSON coming soon).\n\n\n\n\n\n","category":"method"},{"location":"#BibParser.parse_file-Tuple{String}","page":"BibParser","title":"BibParser.parse_file","text":"parse_file(path::String; parser::Symbol = :BibTeX)\n\nParse a bibliography file. Default to BibTeX format. No other options available yet (CSL-JSON coming soon).\n\n\n\n\n\n","category":"method"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"","category":"page"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"Coming soon!","category":"page"},{"location":"csl/","page":"CSL-JSON","title":"CSL-JSON","text":"Modules = [BibParser.CSL]\nPages   = [\"csl.jl\"]","category":"page"}]
}
