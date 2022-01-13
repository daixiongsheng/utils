import { object2QueryString, dealPath, query2Object } from '../src'

describe('url', () => {
  it('object2QueryString 对象转查询串', () => {
    expect(object2QueryString({})).toEqual('')
    expect(
      object2QueryString({
        age: 1,
      })
    ).toEqual('age=1')
    expect(
      object2QueryString({
        id: 1,
        username: 'username',
        email: 'email',
        age: '',
        gender: true,
        updated: void 0,
        book: null,
        delete: false,
        f: NaN,
      })
    ).toEqual(
      'id=1&username=username&email=email&age=&gender=true&book=null&delete=false'
    )

    expect(
      object2QueryString({
        id: 1,
        user: {
          username: 'username',
          email: 'email',
          age: '',
          gender: true,
          updated: void 0,
          book: null,
          delete: false,
        },
        delete: false,
      })
    ).toEqual(
      `id=1&user=${'username=username&email=email&age=&gender=true&book=null&delete=false'
        .replace(/=/g, '%' + '='.charCodeAt(0).toString(16).toUpperCase())
        .replace(
          /\&/g,
          '%' + '&'.charCodeAt(0).toString(16).toUpperCase()
        )}&delete=false`
    )
  })

  it('dealPath 拼接url和查询串', () => {
    const result = dealPath('a.b.c', {
      page: 1,
    })
    expect(result).toEqual('a.b.c/?page=1')

    expect(dealPath('')).toEqual('')
    expect(
      dealPath('a.b.c/', {
        page: 1,
      })
    ).toEqual('a.b.c/?page=1')

    expect(
      dealPath(result, {
        page: 10,
        size: 10,
      })
    ).toEqual('a.b.c/?page=10&size=10')

    expect(
      dealPath('https://daixiongsheng.github.io', {
        page: 1,
        size: 2,
        limit: 10,
      })
    ).toEqual('https://daixiongsheng.github.io/' + '?page=1&size=2&limit=10')

    expect(
      dealPath('https://daixiongsheng.github.io', {
        page: 1,
        size: 2,
        file: 'filename',
        limit: 10,
        a: void 0,
        b: null,
        c: true,
        d: false,
        f: {
          a: 'a',
          b() {
            return void 0
          },
          c: 2,
        },
      })
    ).toEqual(
      'https://daixiongsheng.github.io/' +
        '?page=1&size=2&file=filename&limit=10&b=null&c=true&d=false&f=' +
        'a=a&c=2'
          .replace(/=/g, '%' + '='.charCodeAt(0).toString(16).toUpperCase())
          .replace(/&/g, '%' + '&'.charCodeAt(0).toString(16).toUpperCase())
    )
  })

  it('query2Object  查询串转对象', () => {
    const result = dealPath('a.b.c', {
      page: 1,
      foo: void 0,
      f: '{"age": 123}',
    })

    expect(query2Object('')).toStrictEqual({})
    expect(query2Object(result)).toStrictEqual({
      page: 1,
      f: { age: 123 },
    })
    expect(query2Object('a=1&b=b&c=true&d=false&e=null&f')).toStrictEqual({
      a: 1,
      b: 'b',
      c: true,
      d: false,
      e: null,
      f: '',
    })
  })
})
