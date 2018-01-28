Kernel.module_eval { alias_method :b, :binding }
Object.class_eval { alias_method :pp, :pry }