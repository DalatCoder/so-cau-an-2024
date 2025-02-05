const saoHanStr = `
 [
  {
    "tuoi_full": "Giáp Ngọ",
    "nam_sinh": 2014,
    "tuoi": 12,
    "mang_nam": "Sao Thủy Diệu - Hạn Ngũ Mộ",
    "mang_nu": "Sao Mộc Đức - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Quý Tỵ",
    "nam_sinh": 2013,
    "tuoi": 13,
    "mang_nam": "Sao Thái Bạch - Hạn Thiên Tinh",
    "mang_nu": "Sao Thái Âm - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Nhâm Thìn",
    "nam_sinh": 2012,
    "tuoi": 14,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Tân Mão",
    "nam_sinh": 2011,
    "tuoi": 15,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Canh Dần",
    "nam_sinh": 2010,
    "tuoi": 16,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Kỷ Sửu",
    "nam_sinh": 2009,
    "tuoi": 17,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Mậu Tý",
    "nam_sinh": 2008,
    "tuoi": 18,
    "mang_nam": "Sao Vân Hớn - Hạn Địa Võng",
    "mang_nu": "Sao La Hầu - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Đinh Hợi",
    "nam_sinh": 2007,
    "tuoi": 19,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Bính Tuất",
    "nam_sinh": 2006,
    "tuoi": 20,
    "mang_nam": "Sao Thổ Tú - Hạn Tam Kheo",
    "mang_nu": "Sao Vân Hớn - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Ất Dậu",
    "nam_sinh": 2005,
    "tuoi": 21,
    "mang_nam": "Sao Thủy Diệu - Hạn Ngũ Mộ",
    "mang_nu": "Sao Mộc Đức - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Giáp Thân",
    "nam_sinh": 2004,
    "tuoi": 22,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  },
  {
    "tuoi_full": "Quý Mùi",
    "nam_sinh": 2003,
    "tuoi": 23,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Nhâm Ngọ",
    "nam_sinh": 2002,
    "tuoi": 24,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Tân Tỵ",
    "nam_sinh": 2001,
    "tuoi": 25,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Canh Thìn",
    "nam_sinh": 2000,
    "tuoi": 26,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Kỷ Mão",
    "nam_sinh": 1999,
    "tuoi": 27,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Mậu Dần",
    "nam_sinh": 1998,
    "tuoi": 28,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Đinh Sửu",
    "nam_sinh": 1997,
    "tuoi": 29,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Bính Tý",
    "nam_sinh": 1996,
    "tuoi": 30,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Ất Hợi",
    "nam_sinh": 1995,
    "tuoi": 31,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Giáp Tuất",
    "nam_sinh": 1994,
    "tuoi": 32,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Quý Dậu",
    "nam_sinh": 1993,
    "tuoi": 33,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Nhâm Thân",
    "nam_sinh": 1992,
    "tuoi": 34,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  },
  {
    "tuoi_full": "Tân Mùi",
    "nam_sinh": 1991,
    "tuoi": 35,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Canh Ngọ",
    "nam_sinh": 1990,
    "tuoi": 36,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Kỷ Tỵ",
    "nam_sinh": 1989,
    "tuoi": 37,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Mậu Thìn",
    "nam_sinh": 1988,
    "tuoi": 38,
    "mang_nam": "Sao Thổ Tú - Hạn Ngũ Mộ",
    "mang_nu": "Sao Vân Hớn - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Đinh Mão",
    "nam_sinh": 1987,
    "tuoi": 39,
    "mang_nam": "Sao Thủy Diệu - Hạn Thiên Tinh",
    "mang_nu": "Sao Mộc Đức - Hạn Tam Kheo",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Bính Dần",
    "nam_sinh": 1986,
    "tuoi": 40,
    "mang_nam": "Sao Thái Bạch - Hạn Thiên Tinh",
    "mang_nu": "Sao Thái Âm - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Ất Sửu",
    "nam_sinh": 1985,
    "tuoi": 41,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Giáp Tý",
    "nam_sinh": 1984,
    "tuoi": 42,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Quý Hợi",
    "nam_sinh": 1983,
    "tuoi": 43,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Nhâm Tuất",
    "nam_sinh": 1982,
    "tuoi": 44,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Tân Dậu",
    "nam_sinh": 1981,
    "tuoi": 45,
    "mang_nam": "Sao Mộc Đức - Hạn Huỳnh Tuyền",
    "mang_nu": "Sao Thủy Diệu - Hạn Toán Tận",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Canh Thân",
    "nam_sinh": 1980,
    "tuoi": 46,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  },
  {
    "tuoi_full": "Kỷ Mùi",
    "nam_sinh": 1979,
    "tuoi": 47,
    "mang_nam": "Sao Thổ Tú - Hạn Ngũ Mộ",
    "mang_nu": "Sao Vân Hớn - Hạn Ngũ Mộ",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Mậu Ngọ",
    "nam_sinh": 1978,
    "tuoi": 48,
    "mang_nam": "Sao Thủy Diệu - Hạn Thiên Tinh",
    "mang_nu": "Sao Mộc Đức - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Đinh Tỵ",
    "nam_sinh": 1977,
    "tuoi": 49,
    "mang_nam": "Sao Thái Bạch - Hạn Toán Tận",
    "mang_nu": "Sao Thái Âm - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Bính Thìn",
    "nam_sinh": 1976,
    "tuoi": 50,
    "mang_nam": "Sao Thái Dương - Hạn Toán Tận",
    "mang_nu": "Sao Thổ Tú - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Ất Mão",
    "nam_sinh": 1975,
    "tuoi": 51,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": "TAM TAI",
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Giáp Dần",
    "nam_sinh": 1974,
    "tuoi": 52,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Quý Sửu",
    "nam_sinh": 1973,
    "tuoi": 53,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Nhâm Tý",
    "nam_sinh": 1972,
    "tuoi": 54,
    "mang_nam": "Sao Mộc Đức - Hạn Huỳnh Tuyền",
    "mang_nu": "Sao Thủy Diệu - Hạn Toán Tận",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Tân Hợi",
    "nam_sinh": 1971,
    "tuoi": 55,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Canh Tuất",
    "nam_sinh": 1970,
    "tuoi": 56,
    "mang_nam": "Sao Thổ Tú - Hạn Ngũ Mộ",
    "mang_nu": "Sao Vân Hớn - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Kỷ Dậu",
    "nam_sinh": 1969,
    "tuoi": 57,
    "mang_nam": "Sao Thủy Diệu - Hạn Thiên Tinh",
    "mang_nu": "Sao Mộc Đức - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Mậu Thân",
    "nam_sinh": 1968,
    "tuoi": 58,
    "mang_nam": "Sao Thái Bạch - Hạn Toán Tận",
    "mang_nu": "Sao Thái Âm - Hạn Huỳnh Tuyền",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  },
  {
    "tuoi_full": "Đinh Mùi",
    "nam_sinh": 1967,
    "tuoi": 59,
    "mang_nam": "Sao Thái Dương - Hạn Thiên La",
    "mang_nu": "Sao Thổ Tú - Hạn Diêm Vương",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Bính Ngọ",
    "nam_sinh": 1966,
    "tuoi": 60,
    "mang_nam": "Sao Vân Hớn - Hạn Thiên La",
    "mang_nu": "Sao La Hầu - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Ất Tỵ",
    "nam_sinh": 1965,
    "tuoi": 61,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Giáp Thìn",
    "nam_sinh": 1964,
    "tuoi": 62,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Quý Mão",
    "nam_sinh": 1963,
    "tuoi": 63,
    "mang_nam": "Sao Mộc Đức - Hạn Huỳnh Tuyền",
    "mang_nu": "Sao Thủy Diệu - Hạn Toán Tận",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Nhâm Dần",
    "nam_sinh": 1962,
    "tuoi": 64,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Tân Sửu",
    "nam_sinh": 1961,
    "tuoi": 65,
    "mang_nam": "Sao Thổ Tú - Hạn Ngũ Mộ",
    "mang_nu": "Sao Vân Hớn - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Canh Tý",
    "nam_sinh": 1960,
    "tuoi": 66,
    "mang_nam": "Sao Thủy Diệu - Hạn Thiên Tinh",
    "mang_nu": "Sao Mộc Đức - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Kỷ Hợi",
    "nam_sinh": 1959,
    "tuoi": 67,
    "mang_nam": "Sao Thái Bạch - Hạn Toán Tận",
    "mang_nu": "Sao Thái Âm - Hạn Huỳnh Tuyền",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Mậu Tuất",
    "nam_sinh": 1958,
    "tuoi": 68,
    "mang_nam": "Sao Thái Dương - Hạn Thiên La",
    "mang_nu": "Sao Thổ Tú - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Đinh Dậu",
    "nam_sinh": 1957,
    "tuoi": 69,
    "mang_nam": "Sao Vân Hớn - Hạn Địa Võng",
    "mang_nu": "Sao La Hầu - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Bính Thân",
    "nam_sinh": 1956,
    "tuoi": 70,
    "mang_nam": "Sao Kế Đô - Hạn Địa Võng",
    "mang_nu": "Sao Thái Dương - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  },
  {
    "tuoi_full": "Ất Mùi",
    "nam_sinh": 1955,
    "tuoi": 71,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Giáp Ngọ",
    "nam_sinh": 1954,
    "tuoi": 72,
    "mang_nam": "Sao Mộc Đức - Hạn Huỳnh Tuyền",
    "mang_nu": "Sao Thủy Diệu - Hạn Toán Tận",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Quý Tỵ",
    "nam_sinh": 1953,
    "tuoi": 73,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Trực Thái Tuế"
  },
  {
    "tuoi_full": "Nhâm Thìn",
    "nam_sinh": 1952,
    "tuoi": 74,
    "mang_nam": "Sao Thổ Tú - Hạn Ngũ Mộ",
    "mang_nu": "Sao Vân Hớn - Hạn Ngũ Mộ",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Tân Mão",
    "nam_sinh": 1951,
    "tuoi": 75,
    "mang_nam": "Sao Thủy Diệu - Hạn Thiên Tinh",
    "mang_nu": "Sao Mộc Đức - Hạn Tam Kheo",
    "tam_tai": "TAM TAI",
    "thai_tue": null
  },
  {
    "tuoi_full": "Canh Dần",
    "nam_sinh": 1950,
    "tuoi": 76,
    "mang_nam": "Sao Thái Bạch - Hạn Thiên Tinh",
    "mang_nu": "Sao Thái Âm - Hạn Tam Kheo",
    "tam_tai": null,
    "thai_tue": "Hại Thái Tuế"
  },
  {
    "tuoi_full": "Kỷ Sửu",
    "nam_sinh": 1949,
    "tuoi": 77,
    "mang_nam": "Sao Thái Dương - Hạn Thiên La",
    "mang_nu": "Sao Thổ Tú - Hạn Diêm Vương",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Mậu Tý",
    "nam_sinh": 1948,
    "tuoi": 78,
    "mang_nam": "Sao Vân Hớn - Hạn Địa Võng",
    "mang_nu": "Sao La Hầu - Hạn Địa Võng",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Đinh Hợi",
    "nam_sinh": 1947,
    "tuoi": 79,
    "mang_nam": "Sao Kế Đô - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Dương - Hạn Thiên La",
    "tam_tai": "TAM TAI",
    "thai_tue": "Xung Thái Tuế"
  },
  {
    "tuoi_full": "Bính Tuất",
    "nam_sinh": 1946,
    "tuoi": 80,
    "mang_nam": "Sao Thái Âm - Hạn Diêm Vương",
    "mang_nu": "Sao Thái Bạch - Hạn Thiên La",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Ất Dậu",
    "nam_sinh": 1945,
    "tuoi": 81,
    "mang_nam": "Sao Mộc Đức - Hạn Huỳnh Tuyền",
    "mang_nu": "Sao Thủy Diệu - Hạn Toán Tận",
    "tam_tai": null,
    "thai_tue": null
  },
  {
    "tuoi_full": "Giáp Thân",
    "nam_sinh": 1944,
    "tuoi": 82,
    "mang_nam": "Sao La Hầu - Hạn Tam Kheo",
    "mang_nu": "Sao Kế Đô - Hạn Thiên Tinh",
    "tam_tai": null,
    "thai_tue": "Phá Thái Tuế"
  }
]   
`;

const saoHanArr = JSON.parse(saoHanStr);
const saoHanObject = saoHanArr.reduce((acc, cur) => {
  acc[cur.nam_sinh] = cur;
  return acc;
}, {});

const rowTemplate = `
    <div class="row jusitify-content-center align-items-center mt-3">
        <div class="col-1">{%STT%}</div>
        <div class="col-6">
            <input type="text" class="form-control" autocomplete="off" />
        </div>
        <div class="col-2">
            <select class="form-select">
                <option value="nam" selected>Nam</option>
                <option value="nu">Nữ</option>
            </select>
        </div>
        <div class="col-3">
            <input type="text" class="form-control" autocomplete="off" />
        </div>
    </div>
`;

const DOMObject = {
  btnSubmit: document.getElementById("btn-submit"),
  btnResearch: document.getElementById("btn-research-table"),
  owner: document.getElementById("ownerName"),
  address: document.getElementById("address"),
  tableData: document.getElementById("data-table"),
  outputContent: document.getElementById("output-content"),
  outputContentCheckTable: document.getElementById(
    "output-content-check-table"
  ),
  dataTablecontent: document.getElementById("data-table-content"),
};

function initApp() {
  for (let i = 1; i <= 20; i++) {
    DOMObject.dataTablecontent.insertAdjacentHTML(
      "beforeend",
      rowTemplate.replace("{%STT%}", i)
    );
  }
}

initApp();

DOMObject.btnSubmit.addEventListener("click", function (e) {
  e.preventDefault();

  const ownerName = DOMObject.owner.value || "";
  const address = DOMObject.address.value || "";
  const data = [];

  const allRows = Array.from(
    DOMObject.tableData.querySelectorAll('div[class~="row"]')
  );

  // remove header
  allRows.shift();

  for (const row of allRows) {
    const cells = Array.from(row.querySelectorAll("input"));

    const name = cells[0].value;
    const age = cells[1].value;
    const gender = row.querySelector("select").value;

    if (name && age) {
      data.push({
        name,
        age,
        gender,
        saoHan: saoHanObject[age],
      });
    }
  }

  DOMObject.outputContentCheckTable.innerHTML = buildTemplateTable(data);
  DOMObject.outputContent.innerHTML = buildTemplate(ownerName, address, data);
});

DOMObject.btnResearch.addEventListener("click", function (e) {
  e.preventDefault();

  DOMObject.outputContent.innerHTML = "";
  DOMObject.outputContentCheckTable.innerHTML = "";

  DOMObject.outputContent.innerHTML = buildTraCuuTable();
});

function buildTemplate(ownerName, address, people) {
  let isSuccess = true;
  let html = ``;

  html += "<hr>";

  html += `
        <p>Đệ tử: ${ownerName}</p>
        <p>Địa chỉ: ${address}</p>
    `;

  if (!Array.isArray(people)) {
    html += `
            <hr>

            <div class="alert alert-warning" role="alert">
                Không có danh sách hộ gia đình
            </div>
        `;

    return html;
  }

  if (people.length === 0) {
    html += `
            <hr>

            <div class="alert alert-warning" role="alert">
                Không có danh sách hộ gia đình
            </div>
        `;

    return html;
  }

  for (const person of people) {
    let str = "";

    str += person.name;
    str += " " + person.age;

    if (!person.saoHan) {
      html += `
                <p>${str} - Lỗi!!!</p>
            `;

      isSuccess = false;
      continue;
    }

    if (person.gender === "nam") {
      str += " " + person.saoHan.mang_nam;
    } else {
      str += " " + person.saoHan.mang_nu;
    }

    if (person.saoHan.tam_tai) {
      str += " - " + person.saoHan.tam_tai;
    }

    if (person.saoHan.thai_tue) {
      str += " - " + person.saoHan.thai_tue;
    }

    html += `
            <p>${str}</p>
        `;
  }

  html += `<hr>`;

  if (isSuccess) {
    html += `
            <div class="alert alert-success" role="alert">
                Lấy danh sách sao hạn thành công
            </div>
        `;
  } else {
    html += `
            <div class="alert alert-danger" role="alert">
                Xảy ra lỗi khi lấy 1 số thông tin sao hạn, kiểm tra lại nha 
            </div>
        `;
  }

  return html;
}

function getGenderBadge(gender) {
  if (gender === "nam") {
    return `<span class="badge text-bg-success">Nam</span>`;
  }

  return `<span class="badge text-bg-warning">Nữ</span>`;
}

function buildTemplateTable(people) {
  let html = ``;

  if (!Array.isArray(people)) {
    return "";
  }

  if (people.length === 0) {
    return "";
  }

  html += "<hr>";

  html += `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th class="text-center" scope="col">#</th>
                    <th class="text-center" scope="col">Đệ tử</th>
                    <th class="text-center" scope="col">Năm sinh</th>
                    <th class="text-center" scope="col">Giới tính</th>
                    <th class="text-center" scope="col">Mạng</th>
                    <th class="text-center" scope="col">Tam tai</th>
                    <th class="text-center" scope="col">Thái tuế</th>
                </tr>
            </thead>
            <tbody>
    `;

  for (let i = 1; i <= people.length; i++) {
    const entry = people[i - 1];

    html += `
            <tr>
                <th class="text-center" scope="row">${i}</th>
                <td>${entry.name}</td>
                <td class="text-center">${entry.age}</td>
                <td class="text-center">${getGenderBadge(entry.gender)}</td>
                <td class="text-center">
                    ${
                      entry.saoHan
                        ? entry.gender === "nam"
                          ? entry.saoHan.mang_nam
                          : entry.saoHan.mang_nu
                        : ""
                    }
                </td>
                <td class="text-center">${
                  entry.saoHan ? entry.saoHan.tam_tai || "" : ""
                }</td>
                <td class="text-center">${
                  entry.saoHan ? entry.saoHan.thai_tue || "" : ""
                }</td>
            </tr>
        `;
  }

  html += `
            </tbody>
        </table>
    `;

  let numberOfNam = 0;
  let numberOfNu = 0;

  for (const person of people) {
    if (person.gender === "nam") numberOfNam++;
    else numberOfNu++;
  }

  html += `
        <p>Tổng số thành viên: <span class="badge bg-primary">${people.length}</span></p>
        <p>Tổng số thành viên nam: <span class="badge bg-success">${numberOfNam}</span></p>
        <p>Tổng số thành viên nữ: <span class="badge bg-warning">${numberOfNu}</span></p>
    `;

  return html;
}

function buildTraCuuTable() {
  let html = ``;

  html += `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th class="text-center" scope="col">#</th>
                    <th class="text-center" scope="col">Tuổi</th>
                    <th class="text-center" scope="col">Năm sinh</th>
                    <th class="text-center" scope="col">Tuổi</th>
                    <th class="text-center" scope="col">Nam mạng</th>
                    <th class="text-center" scope="col">Nữ mạng</th>
                    <th class="text-center" scope="col">Tam tai</th>
                    <th class="text-center" scope="col">Thái tuế</th>
                </tr>
            </thead>
            <tbody>
    `;

  for (let i = 1; i <= saoHanArr.length; i++) {
    const entry = saoHanArr[i - 1];

    html += `
            <tr>
                <th class="text-center" scope="row">${i}</th>
                <td>${entry.tuoi_full}</td>
                <td class="text-center">${entry.nam_sinh}</td>
                <td class="text-center">${entry.tuoi}</td>
                <td>${entry.mang_nam}</td>
                <td>${entry.mang_nu}</td>
                <td class="text-center">${entry.tam_tai || ""}</td>
                <td class="text-center">${entry.thai_tue || ""}</td>
            </tr>
        `;
  }

  html += `
            </tbody>
        </table>
    `;

  return html;
}
