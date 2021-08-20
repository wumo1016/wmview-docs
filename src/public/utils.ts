/**
 * @Author: wyb
 * @Descripttion: 复制内容
 * @param {string} data
 */
export const copyContent = (data: string) => {
  const input: HTMLInputElement = document.querySelector('#copy-container')
  input.value = data
  input.select()
  document.execCommand('copy')
}
