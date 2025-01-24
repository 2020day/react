import { defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
shortcuts: [
    [
    /^btn-(.*)$/,
    ([, c]) =>
        `w-54px h-34px lh-34px bg-${c} border-rd-6px text-16px text-center text-[#fff] hover:color-#838c96 hover:cursor-pointer`,
    ],
],
rules: [
    [/^m-([.\d]+)$/, ([, num]) => ({ margin: `${num}px` })],
    [/^p-([.\d]+)$/, ([, num]) => ({ padding: `${num}px` })],
],
presets: [
    presetUno(),
    presetAttributify()
],
});