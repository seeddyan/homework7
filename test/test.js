/*
 * @Author: kael 
 * @Date: 2018-02-14 17:35:48 
 * @Last Modified by: kael
 * @Last Modified time: 2018-03-10 12:57:07
 */

const assert = require('assert');
const RegExps = require('..');

describe('正则表达式', () => {

  it('匹配手机号码', () => {
    [
      '13800000000',
      '14712341234',
      '15012341234',
    ].forEach((mobile) => {
      assert.ok(RegExps.mobile.test(mobile));
    });
    [
      '23800000000',
      '1471234l234',
      '147000000000',
      '150-123-41234',
      '150-1234-1234',
    ].forEach((mobile) => {
      assert.ok(!RegExps.mobile.test(mobile));
    });
  });

  it('匹配 QQ 号', () => {
    [
      '10000',
      '987654321',
      '12345678900',
    ].forEach((qq) => {
      assert.ok(RegExps.qq.test(qq));
    });
    [
      '1000',
      '0987654321',
      '123456789000',
    ].forEach((qq) => {
      assert.ok(!RegExps.qq.test(qq));
    });
  });

  it('匹配数字', () => {
    [
      '5',
      '+5',
      '-5',
      '.5',
      '0.5',
      '1.5',
      '-.5',
      '+.5',
      '10000',
      '10000.',
      '100.00',
    ].forEach((number) => {
      assert.ok(RegExps.number.test(number));
    });
    [
      '.5.5',
      '1.5.5',
    ].forEach((number) => {
      assert.ok(!RegExps.number.test(number));
    });
  });

  // 匹配邮箱
  // 匹配 url
  // 匹配 IPv4
  // 匹配身份证号码
});
