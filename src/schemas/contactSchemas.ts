import { z } from 'zod';

export const createContactSchema = z.object({
  body: z.object({
    name: z.string().min(1, '姓名不能为空').max(50, '姓名不能超过50个字符'),
    email: z.string().email('邮箱格式不正确').max(100, '邮箱不能超过100个字符').optional().or(z.literal('')),
    phone: z.string().regex(/^\d{11}$/, '手机号格式不正确').max(11, '手机号不能超过11个字符'),
    address: z.string().max(200, '地址不能超过200个字符').optional().or(z.literal('')),
    company: z.string().max(100, '公司不能超过100个字符').optional().or(z.literal('')),
    notes: z.string().max(500, '备注不能超过500个字符').optional().or(z.literal('')),
    tags: z.array(z.string()).optional(), // 添加 tags 校验
  }),
});

export const updateContactSchema = z.object({
  params: z.object({
    id: z.string().uuid('ID格式不正确'),
  }),
  body: z.object({
    name: z.string().min(1, '姓名不能为空').max(50, '姓名不能超过50个字符').optional(),
    email: z.string().email('邮箱格式不正确').max(100, '邮箱不能超过100个字符').optional().or(z.literal('')),
    phone: z.string().regex(/^\d{11}$/, '手机号格式不正确').max(11, '手机号不能超过11个字符').optional(),
    address: z.string().max(200, '地址不能超过200个字符').optional().or(z.literal('')),
    company: z.string().max(100, '公司不能超过100个字符').optional().or(z.literal('')),
    notes: z.string().max(500, '备注不能超过500个字符').optional().or(z.literal('')),
    tags: z.array(z.string()).optional(), // 添加 tags 校验
  }).partial(), // 允许部分更新
});

export const getContactByIdSchema = z.object({
  params: z.object({
    id: z.string().uuid('ID格式不正确'),
  }),
});

export const deleteContactSchema = z.object({
  params: z.object({
    id: z.string().uuid('ID格式不正确'),
  }),
});

export const getContactsSchema = z.object({
  query: z.object({
    search: z.string().optional(),
    page: z.string().optional(),
    limit: z.string().optional(),
    sortBy: z.enum(['name', 'createdAt', 'updatedAt']).optional(),
    order: z.enum(['asc', 'desc']).optional(),
    tags: z.string().optional(), // 添加 tags 查询参数校验
  }),
});
