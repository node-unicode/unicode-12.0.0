module.exports=JSON.parse(require('zlib').gunzipSync(Buffer.from([31,139,8,0,0,0,0,0,0,3,45,220,75,178,220,72,178,36,208,13,213,32,221,225,31,213,181,60,233,253,111,163,195,239,97,13,0,38,111,192,88,9,59,128,72,168,89,242,255,198,233,255,198,93,255,203,220,243,119,56,251,127,89,249,253,106,255,247,251,213,238,121,135,251,14,121,135,254,47,231,191,255,222,97,252,14,227,190,195,239,7,205,121,135,251,191,254,247,251,105,255,251,93,214,113,126,255,56,250,189,195,122,135,253,14,239,7,253,251,65,222,161,255,235,124,87,204,95,189,223,97,190,195,247,14,121,135,247,211,241,251,233,122,135,179,230,59,252,126,122,246,175,222,57,191,195,157,223,59,252,253,106,191,195,121,135,188,195,239,218,251,253,247,14,227,29,230,59,188,15,127,239,115,223,251,220,119,223,225,125,248,123,31,94,239,195,235,125,248,253,65,247,253,65,119,189,202,235,93,177,222,21,235,125,120,189,15,239,247,225,253,62,188,223,135,247,251,240,251,127,117,247,251,240,126,31,222,175,252,126,87,236,119,197,121,87,156,119,197,121,87,156,119,197,223,191,194,121,87,156,119,197,187,97,247,188,43,206,187,226,190,43,238,187,226,190,43,238,187,226,190,43,238,187,226,190,43,238,187,226,190,43,238,187,34,239,138,188,43,242,174,200,187,34,239,138,188,43,242,174,120,61,186,121,87,228,93,209,119,69,223,21,125,87,188,110,221,215,173,251,186,117,95,183,238,235,214,125,221,186,175,91,121,221,202,235,86,94,183,242,186,149,255,214,59,236,119,56,239,112,223,33,239,240,174,120,205,203,120,87,140,119,197,120,87,140,119,197,120,87,140,119,197,120,87,140,119,197,120,87,204,119,197,124,87,204,119,197,107,114,94,147,243,154,156,215,228,204,119,197,235,116,94,167,243,58,157,215,233,188,78,231,117,58,223,187,226,181,59,175,221,121,237,206,107,119,94,187,243,218,157,215,238,188,118,231,181,59,175,221,121,237,206,107,119,214,187,226,245,60,175,231,121,61,207,235,121,94,207,243,122,158,215,243,188,158,231,245,60,175,231,121,61,207,235,121,94,207,243,122,158,215,193,188,14,230,117,48,175,131,121,29,204,235,96,94,7,243,58,152,215,193,188,14,230,117,48,175,131,121,29,204,235,96,94,7,243,58,152,215,193,188,14,230,117,48,175,131,121,29,204,235,96,94,7,243,58,152,215,193,188,14,230,117,48,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,117,176,175,131,125,29,236,235,96,95,7,251,58,216,215,193,190,14,246,61,181,125,79,109,223,83,219,247,212,246,61,181,125,79,109,223,83,219,247,212,246,61,181,125,79,109,95,207,251,122,222,215,243,190,158,247,245,188,175,231,125,61,239,235,121,95,207,251,122,222,215,243,190,158,247,245,188,175,231,239,205,218,191,55,107,95,207,251,122,222,215,233,190,78,247,117,186,175,211,125,157,238,235,116,95,167,127,255,251,223,248,239,189,140,223,113,252,29,231,223,113,253,29,207,59,254,250,248,142,247,29,231,223,239,255,238,245,59,254,253,116,255,125,126,255,253,206,249,171,115,254,126,231,252,125,254,247,47,252,142,127,127,202,253,171,159,191,106,249,171,147,191,171,242,87,39,239,243,227,251,254,142,235,239,248,126,58,214,223,241,175,242,184,239,215,123,229,239,248,171,57,254,254,191,189,15,253,29,247,59,126,142,231,29,127,183,226,119,252,221,129,49,191,247,59,243,123,87,205,215,219,119,124,191,127,222,189,254,59,93,167,56,245,239,244,187,231,127,167,225,52,157,92,247,254,21,222,105,59,169,18,85,162,74,84,169,42,85,165,170,84,149,170,82,85,170,74,85,169,42,175,71,243,254,53,233,157,134,211,116,250,156,150,211,118,58,78,215,41,78,170,12,85,134,42,67,149,161,202,80,101,168,50,84,25,170,12,85,134,42,83,149,169,202,84,101,170,50,85,153,170,76,85,166,42,83,149,169,202,167,202,167,202,167,202,167,202,167,202,167,202,167,202,167,202,167,202,167,202,82,101,169,178,84,89,170,44,85,150,42,75,149,165,202,82,101,169,178,85,217,170,108,85,182,42,91,149,173,202,86,101,171,178,85,217,170,28,85,142,42,71,149,163,202,81,229,168,114,84,57,170,28,85,142,42,87,149,171,202,85,229,170,114,85,185,170,92,85,174,42,87,149,171,74,84,137,42,81,37,170,68,149,168,18,85,162,74,84,137,42,85,165,170,84,149,170,82,85,170,74,85,169,42,85,133,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,128,77,192,38,96,83,31,62,62,63,62,63,62,63,62,63,62,63,151,127,44,125,44,125,58,253,233,237,167,183,223,191,154,122,251,233,237,167,183,159,222,126,122,251,233,237,167,183,203,221,93,255,253,251,167,235,20,167,191,154,203,221,93,238,238,114,119,151,187,187,220,221,229,238,46,119,119,185,187,203,221,93,238,238,114,119,151,187,187,220,221,229,238,46,119,119,185,187,203,221,93,238,238,114,119,151,187,187,220,221,229,238,46,111,134,229,205,176,188,25,150,55,195,242,102,88,222,12,203,155,97,121,51,44,119,126,185,243,203,157,95,238,252,114,231,151,59,191,52,110,105,220,242,102,88,222,12,203,155,97,121,51,44,111,134,229,205,176,188,25,150,55,195,242,102,88,222,12,75,55,151,110,46,111,134,229,205,176,60,92,203,195,181,60,92,203,195,181,60,92,203,195,181,60,92,203,195,181,60,92,203,195,181,60,92,219,195,181,61,92,219,195,181,61,92,91,227,182,155,181,221,158,237,246,108,183,103,187,61,219,237,217,110,207,118,123,182,219,179,221,158,237,190,108,247,101,187,47,219,125,217,231,223,73,21,175,188,237,149,183,189,242,182,87,222,246,202,219,94,121,219,43,111,123,229,109,175,188,237,149,183,189,242,182,7,97,123,229,109,175,188,237,177,216,30,139,237,177,216,30,139,237,177,216,30,139,237,177,216,30,139,237,177,216,30,139,237,149,183,189,242,182,174,108,93,217,186,178,117,101,235,202,214,149,173,43,91,87,182,174,108,93,217,186,114,116,229,232,202,209,149,163,43,199,43,239,120,40,143,135,242,120,40,143,135,242,120,40,143,135,242,120,40,143,135,242,120,40,143,222,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,15,229,241,80,30,206,142,135,242,120,40,15,117,135,186,67,221,161,238,80,119,168,59,212,29,234,14,117,199,67,121,224,59,240,29,248,14,124,199,67,121,60,148,199,67,121,60,148,199,67,121,60,148,199,67,121,60,148,199,67,121,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,43,184,188,101,87,128,121,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,93,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,234,21,173,94,209,106,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,230,191,127,48,171,74,85,169,42,85,229,239,165,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,70,110,26,185,105,228,166,145,155,254,78,170,176,43,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,200,77,35,55,141,220,52,114,211,223,73,21,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,174,72,54,34,217,136,100,127,39,85,216,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,174,172,249,247,189,65,21,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,221,143,193,111,254,251,39,53,25,252,24,252,24,252,24,252,24,252,24,252,24,52,240,254,157,84,97,240,99,80,174,31,185,126,228,250,145,235,71,174,31,185,254,239,164,10,131,31,131,166,232,191,47,110,170,48,248,49,248,49,248,49,248,49,248,49,248,49,104,86,16,179,130,223,247,62,85,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,252,24,52,141,248,157,84,97,208,108,34,102,19,49,155,136,217,68,204,38,98,54,17,179,137,152,77,196,108,34,102,19,191,147,42,12,126,12,126,12,126,12,126,12,126,12,126,12,126,12,126,12,126,12,126,12,126,12,46,6,23,131,139,193,197,224,98,208,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,36,38,35,49,25,137,201,72,76,70,98,50,18,147,145,152,140,196,100,228,119,82,133,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,174,177,78,140,117,98,172,19,99,157,24,235,196,88,39,198,58,49,214,137,177,78,140,117,98,172,19,99,157,24,235,196,88,39,198,58,191,211,114,218,78,199,233,58,197,73,21,118,55,187,155,221,205,174,225,208,239,164,10,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,174,65,213,239,164,10,187,198,86,49,182,138,177,85,140,173,98,108,21,99,171,24,91,197,216,42,198,86,191,147,42,236,154,94,197,244,42,166,87,191,147,42,236,110,118,55,187,155,221,205,238,102,119,179,187,217,53,252,138,225,87,12,191,98,248,21,195,175,24,126,197,240,43,134,95,49,252,138,225,87,12,191,98,248,21,195,175,24,126,197,240,43,134,95,49,252,138,225,87,12,191,98,248,21,195,175,24,126,197,240,43,134,95,49,252,138,225,87,12,191,98,248,21,195,175,24,126,197,240,43,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,206,191,123,237,61,97,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,196,176,38,134,53,49,172,137,97,77,12,107,98,88,19,195,154,24,214,68,0,29,1,116,4,208,17,64,71,0,29,1,116,4,208,17,64,71,0,29,1,116,4,208,17,64,71,90,24,105,97,164,133,145,22,70,90,24,105,97,164,133,145,22,70,90,24,105,97,164,133,145,22,70,90,152,127,105,97,255,253,65,208,90,196,140,69,204,88,196,172,64,177,2,197,10,20,43,80,172,64,177,2,197,10,20,43,80,172,64,177,2,197,10,20,43,80,172,64,177,2,197,10,20,43,80,172,64,177,2,197,10,20,43,80,172,64,177,2,197,10,20,43,80,172,240,175,194,191,10,255,42,252,171,208,169,66,167,10,157,42,116,170,208,169,66,167,10,157,42,116,170,184,168,226,162,138,139,42,46,170,184,168,226,162,138,69,42,22,169,88,164,98,145,138,69,42,22,169,88,164,98,145,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,16,161,66,132,10,17,42,68,168,47,252,245,133,191,190,240,215,23,254,250,194,95,95,248,235,11,127,125,225,175,47,252,245,133,191,190,240,215,23,254,250,194,95,95,248,235,11,127,125,225,175,47,252,245,133,191,190,240,215,23,254,250,194,95,95,248,235,11,127,125,225,175,47,252,245,133,255,119,82,133,179,143,179,143,179,143,179,143,179,143,179,143,51,65,65,5,5,21,20,84,80,80,65,65,5,5,21,20,84,80,80,65,65,5,5,21,20,84,80,80,65,65,37,4,149,16,84,66,80,9,65,37,4,149,16,84,66,80,9,65,37,4,253,183,103,47,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,251,223,127,216,196,238,254,247,31,56,177,43,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,138,6,42,26,168,104,160,162,129,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,218,139,173,189,216,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,138,90,42,106,169,168,165,162,150,218,139,173,189,216,191,191,16,224,239,164,10,187,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,43,150,172,88,178,98,201,138,37,43,150,172,88,178,98,201,138,37,43,150,172,88,178,98,201,138,37,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,246,98,107,47,182,255,254,131,126,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,181,23,91,123,177,149,116,87,210,93,73,119,37,221,149,116,87,210,93,73,119,37,221,149,116,87,210,93,73,119,37,221,149,116,87,210,93,73,119,37,221,149,116,87,210,237,175,133,248,252,189,16,159,191,24,226,243,55,67,188,211,231,180,156,182,211,113,186,78,113,82,101,168,50,84,25,170,12,85,134,42,67,149,161,202,80,101,168,50,84,153,170,76,85,166,42,83,149,169,202,84,101,170,50,85,153,170,76,85,62,85,62,85,62,85,62,85,62,85,62,85,62,85,62,85,62,85,62,85,150,42,75,149,165,202,82,101,169,178,84,89,170,44,85,150,42,75,149,173,202,86,101,171,178,85,217,170,108,85,182,42,91,149,173,202,86,229,168,114,84,57,170,28,85,142,42,71,149,163,202,81,229,168,114,84,185,170,92,85,174,42,87,149,171,202,85,229,170,114,85,185,170,92,85,162,74,84,137,42,81,37,170,68,149,168,18,85,162,74,84,169,42,85,165,170,84,149,170,82,85,170,74,85,169,42,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,96,119,176,59,216,29,236,14,118,7,187,131,221,193,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,78,118,39,187,147,221,201,238,100,119,178,59,217,157,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,126,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,98,119,177,187,216,93,236,46,118,23,187,139,221,197,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,110,118,55,187,155,221,205,238,102,119,179,187,217,221,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,97,247,176,123,216,61,236,30,118,15,187,135,221,195,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,94,118,47,187,151,221,203,238,101,247,178,123,217,189,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,216,13,187,97,55,236,134,221,176,27,118,195,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,183,236,150,221,178,91,118,203,110,217,45,187,101,215,92,109,152,171,13,115,181,97,174,54,204,213,134,185,218,48,87,27,230,106,195,92,109,152,171,13,115,181,97,174,54,204,213,134,185,154,191,16,253,243,55,162,127,254,74,244,119,82,101,168,50,84,25,170,76,85,166,42,83,149,169,202,84,101,170,50,85,153,170,76,85,166,42,159,42,159,42,159,42,159,42,159,42,159,42,159,42,159,42,159,42,159,42,75,149,165,202,82,101,169,178,84,89,170,44,85,150,42,75,149,165,202,86,101,171,178,85,217,170,108,85,182,42,91,149,173,202,86,101,171,114,84,57,170,28,85,142,42,71,149,163,202,81,229,168,114,84,57,253,127,255,31,88,87,217,114,52,101,0,0])))