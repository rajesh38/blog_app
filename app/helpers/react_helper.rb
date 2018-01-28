module ReactHelper
  def fingerprinted_asset(name)
    Rails.env.development? ? name : "#{name}-#{ASSET_FINGERPRINT}"
  end
end