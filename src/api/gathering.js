import request from "@/utils/request"
import {
  puts
} from "util";
const group_name='gathering'
const api_name='gathering'
export default {
  getList() {
    return request({
      url: `/${group_name}/${api_name}`,
      methods: 'get'
    });
  },
  search(page, size, searchMap) {
    return request({
      url: `/${group_name}/${api_name}/search/${page}/${size}`,
      methods: 'post',
      data: searchMap
    });
  },
  save(pojo) {
    return request({
      url: `/${group_name}/${api_name}`,
      method: 'post',
      data: pojo
    })
  },
  findById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'get'
    })
  },
  update(id, pojo) {
    if (id == null || id == '') {
      return save(pojo)
    }
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'put',
      data: pojo
    })
  },
  deleteById(id) {
    return request({
      url: `/${group_name}/${api_name}/${id}`,
      method: 'delete'
    });
  }
}
