class Api::V1::SessionsController < Api::V1::BasesController
  skip_before_action :authenticate!, only: %i[create]

  def create
    user = User.find_or_create_from_auth(request.env['omniauth.auth'])
    token = Jwt.encode(user_id: user.id, expired: Time.now.to_i)
    redirect_to "#{ENV.fetch('FRONT_URL', nil)}?token=#{token}", allow_other_host: true
  end

  def me
    render json: @current_user , serializer: UserSerializer,  status: :ok
  end
end
