import provinceCode from './province.js'

test('Check province code', () => {
    expect(provinceCode.getProvince("ab")).toBe("Alberta");
    expect(provinceCode.getProvince("sk")).toBe("Saskatchewan");
    expect(provinceCode.getProvince("lk")).toBe("Not a valid provincial code");
});