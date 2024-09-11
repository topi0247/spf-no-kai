class Api::V1::BasesController < ApplicationController
  before_action :authenticate!
  skip_before_action :authenticate!, only: [:index]

  def index
    render json: { message: 'Hello, World!' }
  end

  def authenticate!
    token = request.headers['Authorization']
    @current_user = nil
    begin
      token = token.split(' ').last
      decode = Jwt.decode(token).first
      expired = decode['expired']
      if expired + 2.weeks >= Time.now.to_i
        user_id = decode['user_id']
        @current_user = User.find_by(id: user_id)
      end
    rescue => e
      render json: { message: '再ログインしてください' }, status: :unauthorized
      Rails.logger.warn("Authentication failed: #{e.message}")
    end
  end
end
